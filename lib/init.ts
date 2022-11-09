import { AxiosRequestConfig } from "axios";
import { AxiosCustomConfigType, PeddingKeyDataType } from "./types";
import { processUrl } from "./utils";

class HttpRequest {
  requestMap = new Map();
  system: AxiosRequestConfig;
  custom: AxiosCustomConfigType;

  // system：axios内置配置， custom：用户自定义配置
  constructor(system: AxiosRequestConfig, custom: AxiosCustomConfigType) {
    this.system = system;
    this.custom = custom;
  }

  init(system: AxiosRequestConfig | "", custom: AxiosCustomConfigType | "") {
    if (typeof system === "object") {
      this.system = {
        ...this.system,
        ...(system || {}),
      };
    }

    if (typeof custom === "object") {
      this.custom = {
        ...this.custom,
        ...(custom || {}),
      };
    }
  }

  // 添加正在请求队列
  addRequestMap(requestKey: string, data?: PeddingKeyDataType) {
    if (this.requestMap.has(requestKey)) {
      this.deleteRequestMap(requestKey, true);
    } else {
      this.requestMap.set(requestKey, data);
    }
  }

  // 删除正在请求队列
  deleteRequestMap(requestKey: string, isAdd?: boolean) {
    // 放弃重复请求
    if (isAdd && this.requestMap.get(requestKey)?.abort) {
      console.log(`重复请求-${requestKey},已取消`);
      this.requestMap.get(requestKey)?.abort();
    } else {
      // 请求结束后删除请求
      this.requestMap.delete(requestKey);
    }
  }

  // 取消全部进行中的请求，可以传入白名单url
  abortRequestPedding(urlList?:string[]){
    let peddingList=[...this.requestMap.values()]
    if(peddingList?.length){
      peddingList.forEach((peddingItem:PeddingKeyDataType)=>{
        // 请求的url地址中包含白名单，则不进行请求
        if(!(urlList||[]).find(item=>processUrl(peddingItem.requestUrl).includes(processUrl(item)))){
          peddingItem.abort&& peddingItem.abort()
        }
      })
    }
  }
}

export default new HttpRequest({}, {
  retry:0,
  retryDelay:1000,
  abortable:false
});
