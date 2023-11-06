import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { RentalService } from "src/rental/rental.service";
import { ReviewDto } from "./review.dto";
import { ErrorResponseDto } from "src/response/response.dtos";
import { Request } from "express";
import { UsersService } from "src/user/user.service";

@Controller("api/review")
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly rentalService: RentalService,
    private readonly usersService: UsersService
  ) {}

  @Get(":productId")
  async getReview(productId: number) {
    return await this.reviewService.getReviewByProductId(productId);
  }

  @Post(":rentalId")
  async createReview(
    @Body() body: ReviewDto,
    @Param("rentalId") rentalId: number,
    @Req() req: Request
  ) {
    const rental = await this.rentalService.getRentalByRentalId(rentalId);
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
    return await this.reviewService.createReview(body, rental);
  }

  @Patch(":reviewId")
  async updateReview(
    @Body() body: ReviewDto,
    @Param("reviewId") reviewId: number
  ) {
    return await this.reviewService.updateReview(body, reviewId);
  }

  @Delete(":reviewId")
  async deleteReview(@Param("reviewId") reviewId: number) {
    return await this.reviewService.deleteReview(reviewId);
  }
}
