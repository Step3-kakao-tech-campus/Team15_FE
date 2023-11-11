import { https } from "../functions/axios.js";
import { MoneyDto, MoneyLogDto } from "./dtos/money.dto.js";
import { ProductCalculateRentalDto } from "./dtos/product.dto.js";

export const getPaymoney = async () => {
  const payment = await https.get("/payment");
  return new MoneyDto(payment.response);
};

export const getPaymoneyLog = async () => {
  const paymentLog = await https.get("/payment/log");
  return paymentLog.response.map((log) => new MoneyLogDto(log));
};

/**
 * @param {string} productId
 * @param {{
 *  startAt: Date
 *  endAt: Date
 * }} param1
 */
export const getProductCalculateRental = async (
  productId,
  { startAt, endAt }
) => {
  const result = await https.post(`/product/${productId}/rent`, {
    startAt,
    endAt,
  });
  return new ProductCalculateRentalDto(result.response);
};

/**
 * @param {string} productId
 * @param {{
 *  startAt: Date
 *  endAt: Date
 * }} param1
 */
export const createRental = async ({ productId, date: { startAt, endAt } }) => {
  const result = await https.post(`/payment/use-coin/${productId}`, {
    startAt,
    endAt,
  });
  return result.response;
};

export const postChargeMoney = async ({ piece }) => {
  const result = await https.post("/payment/charge", { piece });
  return result.response;
};
