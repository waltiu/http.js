// 这里可以统一加工数据，返回
export const onFulfilled = (response:any) => {
  return response;
};

// 对错误信息统一处理，建议和后端定好协议，错误直接返回错误信息，在这里统一message.error
export const onRejected = (res:any) => {
  if (res.response) {
    console.warn(
      `%c 错误信息 %c  ${JSON.stringify(res.response)} %c`,
      "background:red ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  }
  return Promise.reject(res);
};
