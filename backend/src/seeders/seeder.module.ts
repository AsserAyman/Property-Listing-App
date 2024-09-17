import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../property/entities/project.entity';
import { Property } from '../property/entities/property.entity';
import { ProjectSeeder } from './project.seeder';
import { PropertySeeder } from './property.seeder';
import { MainSeeder } from './main.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Property])],
  providers: [ProjectSeeder, PropertySeeder, MainSeeder],
  exports: [MainSeeder],
})
export class SeederModule {}
