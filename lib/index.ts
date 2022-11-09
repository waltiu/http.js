import axios from "axios";
import "./interceptors";
import HttpRequest from "./init";
import { AxiosConfigType } from "./types";
import {processUrl } from "./utils";

export const httpConfig=HttpRequest

// @ts-ignore
axios.defaults = {
  ...httpConfig.system,
};

const sendRequest = (
  method: string,
  url: string,
  params?: any,
  config: AxiosConfigType={}
) => {
  return axios({
    method,
    url: processUrl(url),
    data: params,
    ...httpConfig.custom,
    ...config,
  });
};

export default {
  get: (url: string, params?: any, config?: AxiosConfigType) => {
    return new Promise((resolve) => {
      sendRequest("get", url, params, config).then(resolve).catch(resolve);
    });
  },
  post: (url: string, params?: any, config?: AxiosConfigType) => {
    return new Promise((resolve) => {
      sendRequest("post", url, params, config).then(resolve).catch(resolve);
    });
  },
};
