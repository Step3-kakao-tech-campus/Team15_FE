import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Rental } from "src/rental/rental.entity";
import { UsersModule } from "src/user/user.module";
import { User } from "src/user/user.eneity";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";
import { Category } from "src/category/category.entity";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Rental,
      User,
      Review,
      Location,
      Category,
    ]),
    UsersModule,
  ],
})
export class ProductModule {}
