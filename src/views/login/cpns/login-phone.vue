<template>
  <el-form :model="account" :rules="rules" label-width="70px">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model.number="account.phone" />
    </el-form-item>
    <el-form-item label="验证码" prop="code" class="item">
      <el-input v-model="account.code" />
      <el-button type="primary">获取验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const account = reactive({
  phone: '',
  code: ''
})

const loginAction = () => {
  console.log('手机正在登录...')
}

// https://developer.51cto.com/article/695328.html
defineExpose({
  loginAction
})

//规则
const rules = {
  phone: [
    {
      required: true,
      message: '手机号不为空',
      trigger: 'blur'
    },
    { type: 'number', message: '必须是数字' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  code: [{ required: true, message: '验证码不为空', trigger: 'blur' }]
}
</script>

<style scoped lang="less"></style>

<style>
.item .el-form-item__content {
  flex-wrap: nowrap;
}
.item .el-input {
  margin-right: 10px;
}
</style>
