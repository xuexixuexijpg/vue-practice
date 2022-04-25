import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import type { DRRequestInterceptors, DRRequestConfig } from './type'

//定义类
//增加全局 实例 方法拦截
class DRRequest {
  private instance: AxiosInstance
  private readonly interceptors?: DRRequestInterceptors

  constructor(config: DRRequestConfig) {
    //由config 获取axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //将拦截器放到aios实例中 实例中的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有的实例都有拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //只取axios里的data数据
        return res.data
      },
      (error) => {
        return error
      }
    )
  }

  //request方法
  request<T>(config: DRRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单独的请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      //单独的响应拦截
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //将结果返回出去
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  //get方法
  get<T>(config: DRRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: DRRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  patch<T = any>(config: DRRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: DRRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}
export default DRRequest
