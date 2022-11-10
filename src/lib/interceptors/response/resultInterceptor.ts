import { errorLog } from "../../utils";

// 这里可以统一加工数据，返回
export const onFulfilled = (response:any) => {
  return response;
};

// 对错误信息统一处理，建议和后端定好协议，错误直接返回错误信息，在这里统一message.error
export const onRejected = (res:any) => {
  if (res.response) {
    errorLog(res.response)
  }
  return Promise.reject(res);
};
