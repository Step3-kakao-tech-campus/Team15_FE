import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn("increment")
  imagePk: number;

  @Column("number")
  productPk: number;

  @Column("string")
  productImagePath: string;
}
