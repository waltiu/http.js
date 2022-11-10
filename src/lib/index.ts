import axios, { AxiosRequestConfig } from "axios";
import "./interceptors";
import httpConfig from "./init";
import { AxiosConfigType, AxiosCustomConfigType, JsonpOptioins } from "./types";
import { errorLog, processUrl } from "./utils";
import { endRequest, startRequest } from "./interceptors/request/loadingInterceptor";

// @ts-ignore
axios.defaults = {
  ...httpConfig.system,
};

const sendRequest = (
  method: any,
  url: string,
  params?: any,
  config: AxiosConfigType = {}
) => {
  return axios({
    method,
    url: processUrl(url),
    data: params,
    ...httpConfig.custom||{},
    ...config,
  });
};

export const httpGet = (url: string, params?: any, config?: AxiosConfigType) => {
  return new Promise((resolve) => {
    sendRequest("get", url, params, config).then(resolve).catch(resolve);
  });
};

export const httpPost = (url:string, params?: any, config?: AxiosConfigType) => {
  return new Promise((resolve) => {
    sendRequest("post", url, params, config).then(resolve).catch(resolve);
  });
};

export const jsonp= async (url: string, options?: JsonpOptioins) => {
  // https://github.com/webmodules/jsonp
  const jsonp = (await import('jsonp')).default;
  return new Promise((resolve, reject) => {
    startRequest(options);
    jsonp(
      url,
      {
        ...(options || {}),
      },
      (err: Error | null, data: any) => {
        endRequest(options);
        if (err) {
          errorLog(err)
          reject(err);
        } else {
          resolve(data);
        }
      },
    );
  });
}

export const httpInit = (system:AxiosRequestConfig ={}, custom: AxiosCustomConfigType ={})=>httpConfig.init(system,custom);

export default {
  httpGet,
  httpPost,
  jsonp,
  httpInit,
};

