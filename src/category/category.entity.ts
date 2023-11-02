import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  categoryPk: number;

  @Column("string")
  name: number;
}
