import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { CoinService } from "./coin.service";
import { Request } from "express";
import { UsersService } from "src/user/user.service";
import { ErrorResponseDto } from "src/response/response.dtos";
import { RentProductDto } from "src/product/product.dto";

@Controller("api/payment")
export class CoinController {
  constructor(
    private readonly coinService: CoinService,
    private readonly usersService: UsersService
  ) {}
  @Get()
  async getPayment(@Req() req: Request) {
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
    return await this.coinService.getPayment(user);
  }

  @Post("use-coin/:productId")
  async useCoin(
    @Req() req: Request,
    @Param("productId") productId: number,
    @Body() body: RentProductDto
  ) {
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
    return await this.coinService.useCoin(user, productId, body);
  }

  @Post("charge")
  async charge(@Req() req: Request, @Body() body: { piece: number }) {
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
    return await this.coinService.charge(user, body);
  }

  @Get("log")
  async getCoinLog(@Req() req: Request) {
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
    return await this.coinService.getCoinLog(user);
  }
}
