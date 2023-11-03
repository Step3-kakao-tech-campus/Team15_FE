import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("increment")
  productPk: number;

  @Column("integer")
  locationPk: number;

  @Column("integer")
  companyPk: number;

  @Column("integer")
  categoryPk: number;

  @Column("text")
  name: string;

  @Column("integer")
  rentalPrice: number;

  @Column("integer")
  regularPrice: number;

  @Column("text")
  content: string;

  @Column("datetime", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { nullable: true })
  deleteAt: Date;
}
