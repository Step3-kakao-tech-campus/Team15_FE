import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { ProductService } from "./product.service";
import { RentProductDto } from "./product.dto";
import { UsersService } from "src/user/user.service";
import { Request } from "express";

@Controller("api/product")
export class ProductController {
  constructor(
    private productService: ProductService,
    private usersService: UsersService
  ) {}

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

  @Post(":id/rent")
  async rentProduct(
    @Param("id") id: number,
    @Body() body: RentProductDto,
    @Req() req: Request
  ) {
    const isValidated = await this.usersService.validateUser(
      req.cookies["Authentication"]
    );
    if (!isValidated) {
      return {
        error: {
          status: 400,
          message: "유효하지 않은 토큰입니다.",
          reason: "login_unauthenticated_user",
        },
      };
    }
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    return await this.productService.rentProduct(id, body, user);
  }
}
