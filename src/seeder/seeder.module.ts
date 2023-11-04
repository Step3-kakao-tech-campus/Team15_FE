import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeederService } from "./seeder.service";
import { University } from "src/university/university.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [University],
      logging: true,
    }),
    TypeOrmModule.forFeature([University]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
