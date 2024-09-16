import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // @Column()
  // project: string;

  // @Column()
  // price: number;

  // @Column()
  // area: number;

  // @Column()
  // noBeds: number;

  // @Column()
  // noBaths: number;
}
