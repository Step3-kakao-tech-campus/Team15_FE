import { https } from "../functions/axios.js";
import { ProductDto } from "./dtos/product.dto.js";

export const getProductById = async (id) => {
  const product = await https.get(`/product/${id}`);
  return new ProductDto(product.response);
};

export const getAllProduct = async () => {
  const products = await https.get("/product");
  return products.response.map((product) => new ProductDto(product));
};

export const getProductByCategory = async (category) => {
  const products = await https.get(`/category/${category}`);
  return products.response.map((product) => new ProductDto(product));
};

export const getProductBySearch = async (search) => {
  const products = await https.get(`/product?search=${search}`);
  return products.response.map((product) => new ProductDto(product));
};
