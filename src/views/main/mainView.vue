<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <nave-menu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <!-- 头部 -->
          <nav-header />
        </el-header>
        <!-- 主展示 -->
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NaveMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-container {
  height: inherit;
}
.main-content .page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
}
.el-header .el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
  line-height: 48px;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
