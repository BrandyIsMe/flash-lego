<template>
  <div class="main-app">
    <a-layout-header v-if="withHeader" class="header-style">
      <div class="header-left">慕课乐高</div>
      <div class="header-right">创建设计</div>
    </a-layout-header>
    <router-view></router-view>
    <a-layout-footer v-if="withHeader" class="footer-style">
      Footer
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const withHeader = computed(() => route.meta.withHeader)
</script>

<style scoped lang="less">
.main-app {
  min-width: 1500px;
}
.header-style {
  text-align: center;
  height: 90px;
  line-height: 90px;
  background-color: rgb(51, 51, 51);
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  .header-left {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }

  .header-right {
    color: white;
    font-size: 30px;
  }
}
</style>
