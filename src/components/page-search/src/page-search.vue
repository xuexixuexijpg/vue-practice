<template>
  <div class="page-search">
    <!-- 双向绑定 组件内部默认拿到modelValue -->
    <dr-form v-bind="searchFormConfig" v-model:formDatas="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <!-- 插槽的使用 -->
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="RefreshLeft">重置</el-button>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </dr-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DrForm from '@/base-ui/form'
import { Search, RefreshLeft } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    DrForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData,
      Search,
      RefreshLeft
    }
  }
})
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
