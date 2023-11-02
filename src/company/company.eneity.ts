import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  companyPk: number;

  @Column("number")
  imagePk: number;

  @Column("string")
  name: string;
}
