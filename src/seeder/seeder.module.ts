import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeederService } from "./seeder.service";
import { University } from "src/university/university.entity";
import { Location } from "src/location/location.entity";
import { Category } from "src/category/category.entity";
import { User } from "src/user/user.eneity";
import { Company } from "src/company/company.eneity";
import { Product } from "src/product/product.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [University, Location, Category, User, Company, Product],
      logging: true,
      autoLoadEntities: true,
      // dropSchema: true,
    }),
    TypeOrmModule.forFeature([
      University,
      Location,
      Category,
      User,
      Company,
      Product,
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
