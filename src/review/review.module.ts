import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { User } from "src/user/user.eneity";
import { Product } from "src/product/product.entity";
import { UsersModule } from "src/user/user.module";

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [TypeOrmModule.forFeature([Review, User, Product]), UsersModule],
})
export class ReviewModule {}
