<template>
  <div>
    <el-dropdown size="large">
      <div class="user-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span style="margin-left: 10px">{{ userName }}</span>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item disabled>不可点击</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)
    return {
      userName
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown {
  vertical-align: middle;
  .user-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
