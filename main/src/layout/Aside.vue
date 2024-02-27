<script setup lang="ts">
import { commonStore } from '@/stores/common'

const common = commonStore()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    default-active="/"
    :router="true"
    :collapse="common.collapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
      <span v-show="!common.collapse" class="t">美国队长</span>
    </div>
    <el-menu-item index="/">
      <el-icon><i-ep-house /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><i-ep-view /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><i-ep-Operation /></el-icon>
        <span>微应用-1</span>
      </template>
      <el-menu-item index="/app/app-1/home">路由一</el-menu-item>
      <el-menu-item index="/app/app-1/about">路由二</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><i-ep-PieChart /></el-icon>
        <span>微应用-2</span>
      </template>
      <el-menu-item index="/app/app-2/home">路由一</el-menu-item>
      <el-menu-item index="/app/app-2/about">路由二</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  min-height: 100vh;

  .logo {
    height: 100px;
    border-bottom: 2px solid #999;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
    }

    .t {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
      word-break: keep-all;
    }
  }
}
</style>
