import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coin, CoinLog } from "./coin.entity";
import { In, Repository } from "typeorm";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";
import { Product } from "src/product/product.entity";
import { RentProductDto } from "src/product/product.dto";

@Injectable()
export class CoinService {
  constructor(
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(CoinLog)
    private coinLogRepository: Repository<CoinLog>
  ) {}
  async getPayment(user: UserDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }
  async useCoin(user: UserDto, productId: number, body: RentProductDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    const productFromDb = await this.productRepository.findOne({
      where: { productPk: productId },
    });
    const { endAt, startAt } = body;
    const coinFromDb = await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
    const dayDiff: number = Math.ceil(
      (new Date(endAt).getTime() - new Date(startAt).getTime()) /
        (1000 * 3600 * 24)
    );
    const price: number = productFromDb.rentalPrice * dayDiff;
    if (coinFromDb.piece < price) {
      return null;
    }
    await this.coinLogRepository.save({
      coinPk: coinFromDb.coinPk,
      piece: price,
      coinType: "결제",
    });
    await this.coinRepository.update(
      { userPk: userFromDb.userPk },
      { piece: coinFromDb.piece - price }
    );
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }
}
