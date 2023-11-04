import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { universities } from "src/university/data";
import { University } from "src/university/university.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>
  ) {}

  async seedUniversities() {
    await Promise.all(
      universities.map((university) =>
        this.universityRepository.save(university)
      )
    ).catch((err) => this.logger.error(err));
  }
}
