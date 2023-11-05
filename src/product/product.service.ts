import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { RentProductDto } from "./product.dto";
import { Rental } from "src/rental/rental.entity";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  getProducts() {
    return this.productRepository.find();
  }
  getProduct(id: number) {
    return this.productRepository.findOne({ where: { productPk: id } });
  }
  searchProducts(search: string) {
    return this.productRepository
      .createQueryBuilder("product")
      .where("product.name LIKE :search", { search: `%${search}%` })
      .getMany();
  }
  async rentProduct(id: number, rentProductDto: RentProductDto, user: UserDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    const { startAt, endAt } = rentProductDto;

    const rental = this.rentalRepository.create({
      userPk: userFromDb.userPk,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      productPk: id,
      status: "pending",
    });
    await this.rentalRepository.save(rental);
    return await this.productRepository.findOne({ where: { productPk: id } });
  }
}
