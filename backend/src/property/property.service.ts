import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { DeleteResult, Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    @InjectRepository(Project)
    private projectInfoRepository: Repository<Project>,
  ) {}

  // Create a new property
  async create(createPropertyDto: CreatePropertyDto) {
    // Find the project info or throw an error if not found
    const projectInfo = await this.projectInfoRepository
      .findOneByOrFail({ project: createPropertyDto.project })
      .catch(() => {
        throw new NotFoundException('Project not found');
      });

    // Create a new property entity with the DTO and project info
    const property = this.propertyRepository.create({
      ...createPropertyDto,
      projectInfo,
    });

    // Save and return the new property
    return this.propertyRepository.save(property);
  }

  // Find all properties with pagination and search support
  async findAll(
    page: number = 1,
    limit: number = 9,
    search: string = '',
  ): Promise<{ properties: Property[]; total: number }> {
    // Create a query builder for complex queries
    const queryBuilder = this.propertyRepository
      .createQueryBuilder('property')
      .leftJoinAndSelect('property.projectInfo', 'project_info');

    // Add search condition if search string is provided to support search by project, location or developer
    if (search) {
      queryBuilder.where(
        '(project_info.project::text ILIKE :search OR ' +
          'project_info.location::text ILIKE :search OR ' +
          'project_info.developer::text ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    // Execute the query with pagination
    const [properties, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { properties, total };
  }

  // Find a single property by id
  async findOne(id: number): Promise<Property> {
    return await this.propertyRepository
      .findOneOrFail({
        where: { id },
        relations: ['projectInfo'],
      })
      .catch(() => {
        throw new NotFoundException('Property not found!');
      });
  }

  // Remove a property by id
  remove(id: number): Promise<DeleteResult> {
    return this.propertyRepository.delete({ id });
  }
}
