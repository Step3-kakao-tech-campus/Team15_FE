import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  userPk: number;

  @Column("integer")
  universityPk: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @Column("text")
  nickname: string;

  @Column("text")
  role: string;

  @Column("text")
  idCardImagePath: string;

  @Column("text")
  profileImagePath: string;

  @Column("datetime", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", {
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updateAt: Date;

  @Column("datetime", { nullable: true })
  deleteAt: Date;
}
