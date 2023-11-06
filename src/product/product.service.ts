import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { RentProductDto } from "./product.dto";
import { Rental } from "src/rental/rental.entity";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";
import { Category } from "src/category/category.entity";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
  ) {}
  async getProducts() {
    const products = await this.productRepository.find();
    const categorys = await this.categoryRepository.find();
    const reviews = await this.reviewRepository.find();
    const locations = await this.locationRepository.find();
    return products.map((product) => ({
      id: product.productPk,
      category: categorys.filter(
        (category) => product.categoryPk === category.categoryPk
      )[0].name,
      productName: product.name,
      rentalPrice: product.rentalPrice,
      regularPrice: product.regularPrice,
      review: reviews.filter((review) => product.productPk === review.productPk)
        .length,
      location: locations.filter(
        (location) => product.locationPk === location.locationPk
      )[0].name,
      productImagePath: ["https://placehold.co/400"],
    }));
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
