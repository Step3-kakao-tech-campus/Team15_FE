import { Injectable, Logger } from "@nestjs/common";
import { SignInDto, SignUpDto } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.eneity";
import { Repository } from "typeorm";
import { University } from "src/university/university.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRpository: Repository<User>,
    @InjectRepository(University)
    private universityRepository: Repository<University>,
    private jwtService: JwtService
  ) {}

  async create(signUpDto: SignUpDto) {
    const { universityPk } = await this.universityRepository.findOne({
      where: { name: signUpDto.universityName },
    });
    const user = await this.userRpository.save({
      email: signUpDto.email,
      password: signUpDto.password,
      nickname: signUpDto.nickname,
      idCardImagePath: signUpDto.idCardImagePath,
      universityPk,
      role: "USER",
    });

    return !!user;
  }

  async isSameEmail(email: string) {
    const user = await this.userRpository.findOne({ where: { email } });
    return !!user;
  }

  async login(signInDto: SignInDto) {
    const user = await this.userRpository.findOne({
      where: { email: signInDto.email, password: signInDto.password },
    });

    const payload = {};

    return user ? await this.jwtService.signAsync(payload) : null;
  }
}
