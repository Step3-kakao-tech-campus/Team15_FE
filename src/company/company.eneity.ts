import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  companyPk: number;

  @Column("string")
  name: string;

  @Column("string")
  companyImagePath: string;
}
