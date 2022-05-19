<template>
  <div class="login-panel">
    <h1 class="title">代码乐园</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeppPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="btn-login" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { Iphone, Avatar } from '@element-plus/icons'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'
import { ref } from '@vue/runtime-dom'

const isKeppPassword = ref(false)
const currentTab = ref('account')

//引入账号登录实例
const accountRef = ref<InstanceType<typeof LoginAccount>>()

//ts语法 实例类型 组件本身就是一个实例  reacte中的类写法是继承自 Component
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

//点击登录
const handleLoginClick = () => {
  //调用子组件的方法
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeppPassword.value)
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
}
.el-tabs__content {
  overflow: hidden;
  position: relative;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.btn-login {
  width: 100%;
}
</style>
