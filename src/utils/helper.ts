import { Response } from "../api/types";

const delay = <T>(data: T, ms: number = 500): Promise<T> => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data);
    }, ms);
  });
};

export const createResponse = <T>(data: T): Promise<Response<T>> => {
  return delay({
    code: 0,
    descr: "ОК",
    data,
  });
};
