import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'

const sotre = createStore<IRootState>({
  state: () => {
    return {
      name: 'sss',
      age: 13
    }
  },
  mutations: {},
  modules: {
    login
  }
})

//初始化
export function setupStore() {
  //login模块下的action
  sotre.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default sotre
