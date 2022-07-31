<template>
  <div class="nav-header">
    <el-icon :size="30" style="vertical-align: middle" @click="handleFoldClick">
      <Fold v-if="isFold"></Fold>
      <Expand v-else></Expand>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info-vue />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userInfoVue from './user-info.vue'

const isFold = ref(false)
//注册事件
const emit = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    vertical-align: middle;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
