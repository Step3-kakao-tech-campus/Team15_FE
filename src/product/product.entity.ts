import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  productPk: number;

  @Column("number")
  locationPk: number;

  @Column("number")
  companyPk: number;

  @Column("number")
  categoryPk: number;

  @Column("string")
  name: string;

  @Column("number")
  rentalPrice: number;

  @Column("number")
  regularPrice: number;

  @Column("string")
  content: string;

  @Column("datetime", { default: new Date() })
  createdAt: Date;

  @Column("datetime", { nullable: true })
  deleteAt: Date;
}
