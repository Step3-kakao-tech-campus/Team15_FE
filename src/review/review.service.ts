import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { Repository } from "typeorm";
import { ReviewDto } from "./review.dto";
import { Rental } from "src/rental/rental.entity";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>
  ) {}

  async getReviewByProductId(productId: number) {
    return await this.reviewRepository.find({
      where: { productPk: productId },
    });
  }

  async getReviewByRentalId(rentalId: number) {
    return await this.reviewRepository.find({
      where: { rentalPk: rentalId },
    });
  }

  async createReview(review: ReviewDto, rental: Rental) {
    return await this.reviewRepository.save({
      star: review.star,
      content: review.content,
      rentalPk: rental.rentalPk,
      productPk: rental.productPk,
    });
  }

  async updateReview(review: ReviewDto, reviewId: number) {
    return await this.reviewRepository.update({ reviewPk: reviewId }, review);
  }

  async deleteReview(reviewId: number) {
    await this.reviewRepository.delete({ reviewPk: reviewId });
    return this.getReviewByRentalId(reviewId);
  }
}
