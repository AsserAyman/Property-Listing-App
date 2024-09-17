import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { DeleteResult, Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyRepository.save(createPropertyDto);
  }

  async findAll(
    page: number = 1,
    limit: number = 9,
  ): Promise<{ properties: Property[]; total: number }> {
    const [properties, total] = await this.propertyRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { properties, total };
  }

  async findOne(id: number): Promise<Property> {
    try {
      return await this.propertyRepository.findOneByOrFail({ id });
    } catch {
      throw new NotFoundException('Property not found!');
    }
  }

  remove(id: number): Promise<DeleteResult> {
    return this.propertyRepository.delete({ id });
  }
}