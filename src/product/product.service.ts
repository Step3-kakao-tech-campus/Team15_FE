import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
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
}
