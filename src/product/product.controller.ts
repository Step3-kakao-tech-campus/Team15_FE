import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("api/product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }
}
