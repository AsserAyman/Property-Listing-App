import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../property/entities/property.entity';
import { Project } from '../property/entities/project.entity';
import { PropertyType } from '../property/enums/property-type.enum';
import { Project as ProjectEnum } from '../property/enums/property-project.enum';

@Injectable()
export class PropertySeeder {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async seed() {
    const existingProperties = await this.propertyRepository.count();

    if (existingProperties === 0) {
      const projects = await this.projectRepository.find();

      const properties = [
        {
          type: PropertyType.APARTMENT,
          price: 2500000,
          area: 120,
          noBeds: 2,
          noBaths: 2,
          project: ProjectEnum.TAG_SULTAN,
        },
        {
          type: PropertyType.VILLA,
          price: 8000000,
          area: 350,
          noBeds: 4,
          noBaths: 3,
          project: ProjectEnum.THE_BUTTERFLY,
        },
        {
          type: PropertyType.VILLA,
          price: 5000000,
          area: 200,
          noBeds: 3,
          noBaths: 2,
          project: ProjectEnum.THE_MEDIAN_RESIDENCES,
        },
        {
          type: PropertyType.PENTHOUSE,
          price: 10000000,
          area: 300,
          noBeds: 4,
          noBaths: 4,
          project: ProjectEnum.THE_ISLANDS,
        },
        {
          type: PropertyType.STUDIO,
          price: 1500000,
          area: 50,
          noBeds: 1,
          noBaths: 1,
          project: ProjectEnum.SOUTHMED,
        },
        {
          type: PropertyType.VILLA,
          price: 6000000,
          area: 250,
          noBeds: 3,
          noBaths: 3,
          project: ProjectEnum.DISTRICT_5,
        },
        {
          type: PropertyType.APARTMENT,
          price: 3000000,
          area: 150,
          noBeds: 3,
          noBaths: 2,
          project: ProjectEnum.IL_MONTE_GALALA,
        },
        {
          type: PropertyType.VILLA,
          price: 12000000,
          area: 500,
          noBeds: 5,
          noBaths: 4,
          project: ProjectEnum.HACIENDA_WEST,
        },
        {
          type: PropertyType.VILLA,
          price: 4500000,
          area: 180,
          noBeds: 3,
          noBaths: 2,
          project: ProjectEnum.TAG_SULTAN,
        },
        {
          type: PropertyType.PENTHOUSE,
          price: 15000000,
          area: 400,
          noBeds: 5,
          noBaths: 5,
          project: ProjectEnum.THE_BUTTERFLY,
        },
        {
          type: PropertyType.STUDIO,
          price: 1200000,
          area: 40,
          noBeds: 1,
          noBaths: 1,
          project: ProjectEnum.THE_MEDIAN_RESIDENCES,
        },
        {
          type: PropertyType.VILLA,
          price: 7000000,
          area: 300,
          noBeds: 4,
          noBaths: 3,
          project: ProjectEnum.THE_ISLANDS,
        },
      ];

      for (const propertyData of properties) {
        const project = projects.find(
          (p) => p.project === propertyData.project,
        );
        if (project) {
          const property = this.propertyRepository.create({
            ...propertyData,
            projectInfo: project,
          });

          await this.propertyRepository.save(property);
        }
      }

      console.log('Property seeding completed');
    } else {
      console.log('Properties already exist, skipping seeding');
    }
  }
}
