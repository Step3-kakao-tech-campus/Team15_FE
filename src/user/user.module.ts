import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";
import { User } from "./user.eneity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { University } from "src/university/university.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, University]),
    JwtModule.register({
      global: true,
      secret: "JWT_SECRET_KEY",
      signOptions: { expiresIn: 3600 * 24 * 30 },
    }),
  ],
})
export class UsersModule {}
