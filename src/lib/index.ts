import axios, { AxiosRequestConfig } from "axios";
import "./interceptors";
import httpConfig from "./init";
import { AxiosConfigType, AxiosCustomConfigType } from "./types";
import { processUrl } from "./utils";

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

export const httpInit = (system:AxiosRequestConfig ={}, custom: AxiosCustomConfigType ={})=>httpConfig.init(system,custom);

export default {
  httpGet,
  httpPost,
  httpInit,
};

