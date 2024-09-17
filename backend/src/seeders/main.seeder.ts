import { Injectable } from '@nestjs/common';
import { ProjectSeeder } from './project.seeder';
import { PropertySeeder } from './property.seeder';

@Injectable()
export class MainSeeder {
  constructor(
    private projectSeeder: ProjectSeeder,
    private propertySeeder: PropertySeeder,
  ) {}

  async seed() {
    await this.projectSeeder.seed();
    await this.propertySeeder.seed();
    console.log('All seeding completed');
  }
}
