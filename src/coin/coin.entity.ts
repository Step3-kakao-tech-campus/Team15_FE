import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  coinPk: number;

  @Column("number")
  userPk: number;

  @Column("number")
  piece: number;
}

@Entity()
export class CoinLog {
  @PrimaryGeneratedColumn("increment")
  coingLogPk: number;

  @Column("number")
  coinPk: number;

  @Column("number")
  piece: number;

  @Column("text")
  coinType: string;

  @Column("datetime", { default: new Date() })
  createdAt: Date;
}
