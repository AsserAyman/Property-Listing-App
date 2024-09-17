import { PropertyType } from '../enums/property-type.enum';
import { Project } from '../enums/property-project.enum';
import { IsEnum, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty({ enum: PropertyType, description: 'Type of the property' })
  @IsEnum(PropertyType)
  type: PropertyType;

  @ApiProperty({ enum: Project, description: 'Project of the property' })
  @IsEnum(Project)
  project: Project;

  @ApiProperty({ minimum: 100000, description: 'Price of the property in EGP' })
  @IsNumber()
  @Min(100000)
  price: number;

  @ApiProperty({
    minimum: 10,
    description: 'Area of the property in square meters',
  })
  @IsNumber()
  @Min(10)
  area: number;

  @ApiProperty({ minimum: 1, description: 'Number of bedrooms' })
  @IsNumber()
  @Min(1)
  noBeds: number;

  @ApiProperty({ minimum: 1, description: 'Number of bathrooms' })
  @IsNumber()
  @Min(1)
  noBaths: number;
}
