import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { RentalService } from "src/rental/rental.service";
import { ProductService } from "src/product/product.service";
import { ReviewDto } from "./review.dto";
import { ErrorResponseDto } from "src/response/response.dtos";

@Controller("api/review")
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService // private readonly rentalService: RentalService,
  ) // private readonly productService: ProductService
  {}

  @Get(":productId")
  async getReview(productId: number) {
    return await this.reviewService.getReviewByProductId(productId);
  }

  @Post(":rentalId")
  async createReview(
    @Body() body: ReviewDto,
    @Param("rentalId") rentalId: number
  ) {
    // const rental = await this.rentalService.getRentalByRentalId(rentalId);
    // const product = await this.productService.getProductByProductId(rental.productPk);

    // if (rental.userId !== body.userId || product.userId !== body.userId) {
    //   return new ErrorResponseDto({
    //     error: {
    //       status: 400,
    //       message: "유효하지 않은 요청입니다.",
    //       reason: "invalid_request",
    //     },
    //   });
    // }
    return await this.reviewService.createReview(body, rentalId);
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
