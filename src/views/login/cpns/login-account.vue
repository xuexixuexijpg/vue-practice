<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" label-width="60px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" type="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from 'vue'

import { rules } from '../config/account-config'

import type { FormInstance } from 'element-plus'
import localCache from '@/utils/cache'

import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    //绑定的组件实例
    const formRef = ref<FormInstance>()

    const loginAction = (isKeppPassword: boolean) => {
      //拿form表单的方法回调
      formRef.value?.validate((isValid) => {
        if (isValid) {
          console.log('执行登录啦')
          //记住密码
          if (isKeppPassword) {
            //本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          //开始登录验证 store中分发
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      rules,
      account,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
