const product = {
  id: "733d7309-5ab8-47d2-98e6-4843e497418f",
  category: "IT",
  name: "아이패드",
  rentalPrice: "40000",
  regularPrice: "12000000",
  content: "장난 아닌 아이패드입니다",
  review: "4",
  location: "전남대 제 1학생회관",
  productImagePath: [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ],
  companyName: "학생복지스토어",
  companyImagePath: "https://placehold.co/400x400",
};

/**
 * @returns {Promise<product>}
 */
export const getProductById = async (id) => {
  return Promise.resolve(product);
};

/**
 * @returns {Promise<product[]>}
 */
export const getAllProduct = async () => {
  return Promise.resolve(Array.from({ length: 4 }).fill(product));
};
