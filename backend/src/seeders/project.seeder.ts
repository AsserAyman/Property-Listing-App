import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../property/entities/project.entity';
import { Developer } from '../property/enums/property-developer.enum';
import { Project as ProjectEnum } from '../property/enums/property-project.enum';
import { Location } from '../property/enums/property-location.enum';

@Injectable()
export class ProjectSeeder {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async seed() {
    const projects = [
      {
        project: ProjectEnum.TAG_SULTAN,
        developer: Developer.MADINET_MASR,
        location: Location.NEW_CAIRO,
      },
      {
        project: ProjectEnum.THE_BUTTERFLY,
        developer: Developer.MADINET_MASR,
        location: Location.MOSTAKBAL_CITY,
      },
      {
        project: ProjectEnum.THE_MEDIAN_RESIDENCES,
        developer: Developer.EGYGAB,
        location: Location.NEW_CAIRO,
      },
      {
        project: ProjectEnum.THE_ISLANDS,
        developer: Developer.EGYGAB,
        location: Location.NEW_CAPITAL,
      },
      {
        project: ProjectEnum.SOUTHMED,
        developer: Developer.TMG,
        location: Location.NORTH_COAST,
      },
      {
        project: ProjectEnum.DISTRICT_5,
        developer: Developer.MARAKEZ,
        location: Location.NEW_CAIRO,
      },
      {
        project: ProjectEnum.IL_MONTE_GALALA,
        developer: Developer.TATWEER_MISR,
        location: Location.AIN_SOKHNA,
      },
      {
        project: ProjectEnum.HACIENDA_WEST,
        developer: Developer.PALM_HILLS,
        location: Location.RAS_EL_HEKMA,
      },
    ];

    for (const projectData of projects) {
      const existingProject = await this.projectRepository.findOne({
        where: { project: projectData.project },
      });

      if (!existingProject) {
        await this.projectRepository.save(projectData);
      }
    }

    console.log('Project seeding completed');
  }
}
