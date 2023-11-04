import { Controller, Get, Param, Query } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("api/product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(@Query("search") search: string) {
    if (search) {
      return await this.productService.searchProducts(search);
    }
    return await this.productService.getProducts();
  }

  @Get(":id")
  async getProduct(@Param("id") id: number) {
    return await this.productService.getProduct(id);
  }
}
