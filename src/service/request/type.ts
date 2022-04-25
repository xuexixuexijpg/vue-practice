import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//定义接口
export interface DRRequestInterceptors<R = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: R) => R
  responseInterceptorCatch?: (error: any) => any
}

//扩展AxiosRequestConfig 接口继承
export interface DRRequestConfig<R = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DRRequestInterceptors<R>
}
