import { createResponse } from "../utils/helper";
import { RequestGetCrews } from "./crew";

export type RequestCreateOrder = RequestGetCrews & {
  crew_id: number | string;
};

export const createOrder = (data: RequestCreateOrder) => {
  return createResponse({
    order_id: 4,
  });
};
