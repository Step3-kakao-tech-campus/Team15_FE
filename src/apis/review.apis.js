import { https } from "../functions/axios.js";
import { ReviewDto } from "./dtos/review.dto.js";

export const createReview = async ({ rentalId, star, content }) => {
  const review = await https.post(`/review/${rentalId}`, { star, content });
  return review.response;
};

export const getReviews = async ({ productId }) => {
  const reviews = await https.get(`/review/${productId}`);
  return reviews.response.map((review) => new ReviewDto(review));
};
