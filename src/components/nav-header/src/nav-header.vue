<template>
  <div class="nav-header">
    <el-icon :size="30" style="vertical-align: middle" @click="handleFoldClick">
      <Fold v-if="isFold"></Fold>
      <Expand v-else></Expand>
    </el-icon>
    <div class="content">
      <dr-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info-vue />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import userInfoVue from './user-info.vue'
import DrBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

const isFold = ref(false)
//注册事件
const emit = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

//面包屑数据
const store = useStore()
const route = useRoute()
const breadcrumbs = computed(() => {
  //路由发生变化
  const currentPath = route.path
  const userMenus = store.state.login.userMenus
  return pathMapBreadcrumbs(userMenus, currentPath)
})
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
