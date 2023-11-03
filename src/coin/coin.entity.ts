import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coin {
  @PrimaryGeneratedColumn("increment")
  coinPk: number;

  @Column("integer")
  userPk: number;

  @Column("integer")
  piece: number;
}

@Entity()
export class CoinLog {
  @PrimaryGeneratedColumn("increment")
  coingLogPk: number;

  @Column("integer")
  coinPk: number;

  @Column("integer")
  piece: number;

  @Column("text")
  coinType: string;

  @Column("datetime", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
