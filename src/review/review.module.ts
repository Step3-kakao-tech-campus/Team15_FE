import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { User } from "src/user/user.eneity";
import { Product } from "src/product/product.entity";
import { UsersModule } from "src/user/user.module";
import { RentalModule } from "src/rental/rental.module";
import { ProductModule } from "src/product/product.module";

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [
    TypeOrmModule.forFeature([Review, User, Product]),
    UsersModule,
    RentalModule,
    ProductModule,
  ],
})
export class ReviewModule {}
