import { Module } from "@nestjs/common";
import { CoinService } from "./coin.service";
import { CoinController } from "./coin.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coin, CoinLog } from "./coin.entity";
import { UsersModule } from "src/user/user.module";
import { User } from "src/user/user.eneity";

@Module({
  providers: [CoinService],
  controllers: [CoinController],
  imports: [TypeOrmModule.forFeature([Coin, CoinLog, User]), UsersModule],
})
export class CoinModule {}
