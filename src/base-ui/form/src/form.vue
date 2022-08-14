<template>
  <div class="dr-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- 根据传入的类型显示不同的ui -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formDatas: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '0.02 0.03', width: '0.5' })
    },
    //el col布局的动态变化
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:formDatas'],
  setup(props, { emit }) {
    //set不起作用 不是单向数据流 还是相当于
    // const formData = computed({
    //   get: () => props.formDatas,
    //   set: (newValue) => {
    //     console.log('------')
    //     emit('update:formDatas', newValue)
    //   }
    // })

    //浅拷贝了一份对象 这里修改不会修改原来的
    const formData = ref({ ...props.formDatas })
    //监听变化并把更新事件发射出去
    watch(formData, (newValue) => emit('update:formDatas', newValue), {
      deep: true
    })
    return { formData }
  }
})
</script>

<style scoped lang="less">
.dr-form {
  padding-top: 20px;
}
</style>
