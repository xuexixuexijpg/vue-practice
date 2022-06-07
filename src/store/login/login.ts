import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  //命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  //修改state在matation中;编码规范
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUerInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    //账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      //实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      //本地缓存token
      localCache.setCache('token', token)

      //请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      //保存在state中
      commit('changeUerInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      //请求角色菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      //跳转到首页
      router.push('/main')
    },
    //手机登录
    phoneLoginAction({ commit }, paylod: any) {
      console.log('手机登录')
    },
    //初始化vuex的内存数据
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUerInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
