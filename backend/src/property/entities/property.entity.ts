import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PropertyType } from '../enums/property-type.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Project as ProjectEntity } from './project.entity';

@Entity()
export class Property {
  @ApiProperty({ description: 'The unique identifier of the property' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ enum: PropertyType, description: 'Type of the property' })
  @Column({
    type: 'enum',
    enum: PropertyType,
  })
  type: PropertyType;

  @ApiProperty({ description: 'Project information of the property' })
  @ManyToOne(() => ProjectEntity)
  projectInfo: ProjectEntity;

  @ApiProperty({ description: 'Price of the property in EGP' })
  @Column()
  price: number;

  @ApiProperty({ description: 'Area of the property in square meters' })
  @Column()
  area: number;

  @ApiProperty({ description: 'Number of bedrooms' })
  @Column()
  noBeds: number;

  @ApiProperty({ description: 'Number of bathrooms' })
  @Column()
  noBaths: number;
}
