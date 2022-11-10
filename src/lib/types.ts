import { AxiosRequestConfig } from "axios";



export type AxiosCustomConfigType={
  retry?:number, // 请求失败重试，>0进行重试
  retryDelay?:number // 重试间隔时间
  changeLoadingStatus?: (loading: boolean) => void; // 修改loading状态
  abortable?:boolean, // 重复请求是否放弃
  aborted?:boolean // 当前请求是否将被放弃，放弃的将不会进行loading
}
export type AxiosConfigType=AxiosCustomConfigType&AxiosRequestConfig

export type PeddingKeyDataType={
  pageUrl:string,
  requestUrl:string,
  abort:any
}

export type JsonpOptioins = {
  param?: string;
  timeout?: number;
  prefix?: string;
  name?: string;
  ignoreLoading?:boolean
};