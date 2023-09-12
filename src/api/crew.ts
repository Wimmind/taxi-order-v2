import { createResponse } from "../utils/helper";
import { CREWS_MOCK } from "./mock";

export type RequestGetCrews = {
  source_time: number | string;
  address: string;
  coords: number[];
};

export const getCrews = (data: RequestGetCrews) => {
  const response = CREWS_MOCK.map((crew, index: number) => {
    crew.coords[0] = data.coords[0] + 0.0006 * (index + 1);
    crew.coords[1] = data.coords[1] + 0.0006 * (index + 1);
    return crew;
  });

  return createResponse(response);
};
