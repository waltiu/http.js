import axios from 'axios';
import * as headerInterceptor from './request/headerInterceptor';
import * as loadingInterceptor from './request/loadingInterceptor';
import * as retryInterceptor from './response/retryInterceptor';
import * as abortInterceptor from './request/abortInterceptor'
import * as resultInterceptor from './response/resultInterceptor'

//官方文档： https://www.axios-http.cn/docs/interceptors

// 请求拦截(先定义的后生效,abortInterceptor会在loadingInterceptor前执行)
axios.interceptors.request.use(
  loadingInterceptor.onRequestFulfilled,
  loadingInterceptor.onRequestRejected
)
axios.interceptors.request.use(abortInterceptor.onRequestFulfilled,abortInterceptor.onRequestRejected)
axios.interceptors.request.use(headerInterceptor.onFulfilled, headerInterceptor.onRejected);



// 相应拦截（后定义的先生效，abortInterceptor会在loadingInterceptor前执行）
axios.interceptors.response.use(
  loadingInterceptor.onResponseFulfilled,
  loadingInterceptor.onResponseRejected
);
axios.interceptors.response.use(retryInterceptor.onFulfilled, retryInterceptor.onRejected);
axios.interceptors.response.use(abortInterceptor.onResponseFulfilled,abortInterceptor.onResponseRejected)
axios.interceptors.response.use(resultInterceptor.onFulfilled,resultInterceptor.onRejected)
