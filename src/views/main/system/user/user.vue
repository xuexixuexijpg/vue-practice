<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content">
      <dr-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>

        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </dr-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import DrTable from '@/base-ui/table'
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()
//vux action事件
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

//获取数据
const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)

//设置一个配置文件,将展示的表给配置出来
const propList = [
  { prop: 'name', label: '用户名', mindWidth: '100' },
  { prop: 'realname', label: '真实姓名', mindWidth: '100' },
  { prop: 'cellphone', label: '手机号码', mindWidth: '100' },
  { prop: 'enable', label: '状态', mindWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    mindWidth: '100',
    slotName: 'createAt'
  },
  { prop: 'updateAt', label: '更新时间', mindWidth: '100' }
]
</script>

<style lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
