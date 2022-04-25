//service的统一出口
import DRRequest from './request'
import { BASE_URL } from './request/config'

const drRequest = new DRRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = `Beare ${token}`
      }

      return config
    }
  }
})

export default drRequest
