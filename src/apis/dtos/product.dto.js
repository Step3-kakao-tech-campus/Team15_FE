export class ProductDto {
  constructor({
    id,
    productName,
    rentalPrice,
    location,
    productImagePath,
    description,
    review,
  }) {
    this.id = id;
    this.name = productName;
    this.productImagePath = productImagePath;
    this.location = location;
    this.rentalPrice = rentalPrice;
    this.description = description;
    this.review = review;
  }
}