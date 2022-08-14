import drRequest from '../index'
import { IDataType } from '../types'
import { IAccount, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role'
}

//登录请求
export function accountLoginRequest(account: IAccount) {
  return drRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

//请求用户信息
export function requestUserInfoById(id: number) {
  return drRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}

//请求用户菜单
export function requestUserMenusByRoleId(roleId: number) {
  return drRequest.get<IDataType>({
    url: LoginApi.UserMenus + '/' + roleId + '/menu'
  })
}
