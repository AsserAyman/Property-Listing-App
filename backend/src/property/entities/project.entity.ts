import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Developer } from '../enums/property-developer.enum';
import { Project as ProjectEnum } from '../enums/property-project.enum';
import { Location } from '../enums/property-location.enum';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ProjectEnum,
  })
  project: ProjectEnum;

  @Column({
    type: 'enum',
    enum: Developer,
  })
  developer: Developer;

  @Column({
    type: 'enum',
    enum: Location,
  })
  location: Location;
}
