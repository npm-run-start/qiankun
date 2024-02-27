<script setup lang="ts">
import { routes } from '@/router/index'
import { commonStore } from '@/stores/common'

const common = commonStore()

const collapseClick = () => {
  common.submitCollapse(!common.collapse)
}
</script>

<template>
  <div class="header">
    <div class="fold" @click="collapseClick">
      <el-icon :size="20"><i-ep-fold /></el-icon>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;

  .fold {
    cursor: pointer;
    height: 20px;
    margin-right: 10px;
  }

  .el-breadcrumb {
    flex: 1;
  }
}
</style>
