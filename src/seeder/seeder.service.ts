import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { University } from "src/university/university.entity";
import { Repository } from "typeorm";
import {
  categories,
  companies,
  locations,
  products,
  universities,
  users,
} from "./data";
import { Product } from "src/product/product.entity";
import { Category } from "src/category/category.entity";
import { User } from "src/user/user.eneity";
import { Company } from "src/company/company.eneity";
import { Location } from "src/location/location.entity";

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async seedUniversities() {
    await Promise.all(
      universities.map((university) =>
        this.universityRepository.save(university)
      )
    ).catch((err) => this.logger.error(err));
  }
  async seedLocations() {
    await Promise.all(
      locations.map((location) => this.locationRepository.save(location))
    ).catch((err) => this.logger.error(err));
  }
  async seedCategories() {
    await Promise.all(
      categories.map((category) => this.categoryRepository.save(category))
    ).catch((err) => this.logger.error(err));
  }
  async seedUsers() {
    await Promise.all(
      users.map((user) => this.userRepository.save(user))
    ).catch((err) => this.logger.error(err));
  }
  async seedCompanies() {
    await Promise.all(
      companies.map((company) => this.companyRepository.save(company))
    ).catch((err) => this.logger.error(err));
  }
  async seedProducts() {
    await Promise.all(
      products.map((university) => this.productRepository.save(university))
    ).catch((err) => this.logger.error(err));
  }

  async seedAll() {
    await this.seedUniversities();
    await this.seedLocations();
    await this.seedCategories();
    await this.seedUsers();
    await this.seedCompanies();
    await this.seedProducts();
  }
}
