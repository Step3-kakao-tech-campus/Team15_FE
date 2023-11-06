import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Rental } from "./rental.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async getRentals() {
    return await this.rentalRepository.find();
  }
  async returnRental(userDto: UserDto, rentalPk: number) {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    const rental = await this.rentalRepository.findOne({
      where: { rentalPk, userPk: user.userPk },
    });
    // rental.status = "returned";
    await this.rentalRepository.save(rental);
    return rental;
  }
  async getRentalByRentalId(rentalPk: number) {
    return await this.rentalRepository.findOne({ where: { rentalPk } });
  }
}
