import { Controller, Get, Req } from "@nestjs/common";
import { UsersService } from "src/user/user.service";
import { CategoryService } from "./category.service";
import { ErrorResponseDto } from "src/response/response.dtos";
import { Request } from "express";

@Controller("api/category")
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  async getCategory(@Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    if (!user) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "유효하지 않은 토큰입니다.",
          reason: "login_unauthenticated_user",
        },
      });
    }
    return await this.categoryService.getCategory();
  }

  @Get(":categoryId")
  async getCategoryProduct(@Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    if (!user) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "유효하지 않은 토큰입니다.",
          reason: "login_unauthenticated_user",
        },
      });
    }
    return await this.categoryService.getCategoryProduct(
      Number(req.params.categoryId)
    );
  }
}
