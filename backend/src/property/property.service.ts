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

  async create(createPropertyDto: CreatePropertyDto) {
    const projectInfo = await this.projectInfoRepository.findOne({
      where: { project: createPropertyDto.project },
    });

    if (!projectInfo) {
      throw new NotFoundException('Project not found');
    }

    const property = this.propertyRepository.create({
      ...createPropertyDto,
      projectInfo,
    });

    return this.propertyRepository.save(property);
  }

  async findAll(
    page: number = 1,
    limit: number = 9,
    search: string = '',
  ): Promise<{ properties: Property[]; total: number }> {
    const queryBuilder = this.propertyRepository
      .createQueryBuilder('property')
      .leftJoinAndSelect('property.projectInfo', 'project_info');

    if (search) {
      queryBuilder.where(
        '(project_info.project::text ILIKE :search OR ' +
          'project_info.location::text ILIKE :search OR ' +
          'project_info.developer::text ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    const [properties, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { properties, total };
  }

  async findOne(id: number): Promise<Property> {
    try {
      return await this.propertyRepository.findOneOrFail({
        where: { id },
        relations: ['projectInfo'],
      });
    } catch {
      throw new NotFoundException('Property not found!');
    }
  }

  remove(id: number): Promise<DeleteResult> {
    return this.propertyRepository.delete({ id });
  }
}
