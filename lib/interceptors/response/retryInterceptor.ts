import axios from 'axios';

export const onFulfilled = (response) => {
  return response;
};

// 请求配置设置retry后支持失败重试
export const onRejected = (res) => {
  if (res && res.config) {
    const { config } = res;
    // 如果配置不存在或重试属性未设置，抛出promise错误
    if (!config.retry) return Promise.reject(res);
    // 设置一个变量记录重新请求的次数
    config.retryCount = config.retryCount || 0;
    // 检查重新请求的次数是否超过我们设定的请求次数
    if (config.retryCount >= config.retry) {
      return Promise.reject(res);
    }
    // 重新请求的次数自增
    config.retryCount += 1;
    // 创建新的Promise来处理重新请求的间隙
    const back = new Promise<void>(function (resolve) {
      console.log(`接口${config.url}请求超时，重新请求`);
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1000);
    });
    // 返回axios的实体，重试请求
    return back.then(function () {
      return axios(config);
    });
  }
  return Promise.reject(res);
};
