import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coin } from "./coin.entity";
import { Repository } from "typeorm";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";

@Injectable()
export class CoinService {
  constructor(
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async getPayment(user: UserDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }
}
