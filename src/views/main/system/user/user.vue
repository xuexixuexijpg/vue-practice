<template>
  <div class="user">
    <dr-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import DrForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped lang="less"></style>
