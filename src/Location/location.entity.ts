import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("increment")
  locationPk: number;

  @Column("number")
  universityPk: number;

  @Column("string")
  latitude: string;

  @Column("string")
  longitute: string;

  @Column("string")
  name: string;
}
