//service的统一出口
import DRRequest from './request'
import { BASE_URL } from './request/config'
import localCahce from '@/utils/cache'
const drRequest = new DRRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = localCahce.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    }
  }
})

export default drRequest
