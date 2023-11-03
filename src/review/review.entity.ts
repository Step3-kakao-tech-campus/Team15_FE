import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn("increment")
  reviewPk: number;

  @Column("integer")
  rentalPk: number;

  @Column("integer")
  productPk: number;

  @Column("integer")
  star: number;

  @Column("text")
  content: string;

  @Column("datetime", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", {
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("datetime", { nullable: true })
  deletedAt: Date;
}
