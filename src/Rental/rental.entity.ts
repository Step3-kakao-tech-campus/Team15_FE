import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rental {
  @PrimaryGeneratedColumn("increment")
  rentalPk: number;

  @Column("number")
  productPk: number;

  @Column("number")
  userPk: number;

  @Column("datetime")
  startAt: Date;

  @Column("datetime")
  endAt: Date;

  @Column("string")
  status: string;
}
