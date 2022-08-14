import { getPageListData } from '@/service/mian/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, paylod: any) {
      //对页面进行网络亲求
      const pageResult = await getPageListData(paylod.pageUrl, paylod.queryInfo)

      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
