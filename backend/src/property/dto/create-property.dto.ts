import { PropertyLocation } from '../enums/property-location.enum';
import { PropertyType } from '../enums/property-type.enum';
import { IsEnum, IsNumber, Min } from 'class-validator';

export class CreatePropertyDto {
  @IsEnum(PropertyType)
  type: PropertyType;

  @IsEnum(PropertyLocation)
  location: PropertyLocation;

  @IsNumber()
  @Min(100000) // Property price must be at least 100,000 to avoid scams
  price: number;

  @IsNumber()
  area: number;

  @IsNumber()
  noBeds: number;

  @IsNumber()
  noBaths: number;
}
