import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyType } from '../enums/property-type.enum';
import { PropertyLocation } from '../enums/property-location.enum';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: PropertyType,
  })
  type: PropertyType;

  @Column({
    type: 'enum',
    enum: PropertyLocation,
  })
  location: PropertyLocation;

  @Column()
  price: number;

  @Column()
  area: number;

  @Column()
  noBeds: number;

  @Column()
  noBaths: number;
}
