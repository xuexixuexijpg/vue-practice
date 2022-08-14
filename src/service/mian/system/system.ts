import drRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return drRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
