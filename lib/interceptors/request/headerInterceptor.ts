export const onFulfilled = (config) => {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
};

export const onRejected = (error) => {
  return Promise.reject(error);
};
