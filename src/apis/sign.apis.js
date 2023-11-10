import { isAxiosError } from "axios";
import { https } from "../functions/axios.js";

export const signIn = async ({ email, password }) => {
  const review = await https.post(`/user/login`, { email, password });
  if (isAxiosError(review) && result.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};

export const signOut = async () => {
  const review = await https.post(`/user/logout`);
  if (isAxiosError(review) && review.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};

export const signUp = async ({
  email,
  password,
  name,
  university,
  universityCard,
}) => {
  const review = await https.post(`/user/join`, {
    email,
    password,
    nickname: name,
    universityName: university,
    idCardImagePath: universityCard,
  });
  if (isAxiosError(review) && review.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};
