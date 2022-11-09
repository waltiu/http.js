// url统一用/开头
export const processUrl = (url: string) => {
  if (url && !/^https?:\/\//i.test(url) && !url.startsWith("/")) {
    return `/${url}`;
  }
  return url;
};

export const createRequestKey=(method:string,url:string,data:string)=>{
  return `${method}-${url}-${typeof data==='object'?JSON.stringify(data):data}`
}