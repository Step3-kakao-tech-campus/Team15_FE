import { https } from "../functions/axios.js";

export const signIn = async ({ email, password }) => {
  const review = await https.post(`/user/login`, { email, password });
  return review.response;
};

export const signOut = async () => {
  const review = await https.post(`/user/logout`);
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
  return review.response;
};
