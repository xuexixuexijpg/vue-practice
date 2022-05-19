import { createStore, Store } from 'vuex'
import { IRootState } from './types'

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

export default sotre
