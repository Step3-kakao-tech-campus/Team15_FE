import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Rental } from "./rental.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.eneity";

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
}
