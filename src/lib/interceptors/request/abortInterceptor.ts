import axios from "axios";
import http from "../../init";
import { createRequestKey } from "../../utils";

// 重复请求自动取消后面的请求，通过abortable控制
export const onRequestFulfilled = (config:any) => {
  const { abortable, data, url, method } = config;
  const requestKey = createRequestKey(method, url, data);
  let abortController: any = null;
  const pageUrl = window.location.pathname;
  if (abortable) {
    const CancelToken = axios.CancelToken;
    abortController = CancelToken.source();
    config.cancelToken = abortController.token;
    if (http.requestMap.has(requestKey)) {
      abortController.cancel(
        `请求重复-${requestKey}：该请求已被取消，可通过abortable:false禁用`
      );
      config.aborted = true;
      return config;
    }
  }
  http.addRequestMap(requestKey, {
    requestUrl: url,
    pageUrl,
    abort: abortController?.cancel,
  });
  return config;
};

export const onRequestRejected = (error:any) => {
  return Promise.reject(error);
};

export const onResponseFulfilled = (response:any) => {
  const { data, url, method } = response;
  const requestKey = createRequestKey(method, url, data);
  http.deleteRequestMap(requestKey);
  return response;
};

export const onResponseRejected = (error:any) => {
  if (error.config) {
    const { data, url, method } = error.config;
    const requestKey = createRequestKey(method, url, data);
    http.deleteRequestMap(requestKey);
  }
  // TODO: 这里需要能拿到请求的config
  return Promise.reject(error);
};
