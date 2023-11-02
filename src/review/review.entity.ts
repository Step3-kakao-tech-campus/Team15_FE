import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn("increment")
  reviewPk: number;

  @Column("number")
  rentalPk: number;

  @Column("number")
  productPk: number;

  @Column("number")
  star: number;

  @Column("content")
  content: string;

  @Column("datetime", { default: new Date() })
  createdAt: Date;

  @Column("datetime", { default: new Date(), onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("datetime", { nullable: true })
  deletedAt: Date;
}
