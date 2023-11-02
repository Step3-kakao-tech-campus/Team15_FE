import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn()
  coin_pk: number;

  @Column()
  user_pk: number;

  @Column()
  piece: number;
}
