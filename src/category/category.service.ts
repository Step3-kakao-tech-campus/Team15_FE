import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { Product } from "src/product/product.entity";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}
  async getCategory() {
    return await this.categoryRepository.find();
  }

  async getCategoryProduct(categoryId: number) {
    return await this.productRepository.find({
      where: { categoryPk: categoryId },
    });
  }
}
