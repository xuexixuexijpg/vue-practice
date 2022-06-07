import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

//root里面有module类型
export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
