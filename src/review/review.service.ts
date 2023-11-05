import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { Repository } from "typeorm";
import { ReviewDto } from "./review.dto";

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

  async createReview(review: ReviewDto, rentalId: number) {
    return await this.reviewRepository.save({
      ...review,
      rentalPk: rentalId,
    });
  }

  async updateReview(review: ReviewDto, reviewId: number) {
    return await this.reviewRepository.update({ reviewPk: reviewId }, review);
  }

  async deleteReview(reviewId: number) {
    return await this.reviewRepository.delete({ reviewPk: reviewId });
  }
}
