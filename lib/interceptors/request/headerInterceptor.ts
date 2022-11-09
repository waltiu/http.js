export const onFulfilled = (config:any) => {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
};

export const onRejected = (error:any) => {
  return Promise.reject(error);
};
