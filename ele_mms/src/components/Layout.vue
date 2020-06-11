<template>
  <div class="layout">
    <!-- 头部 -->
    <app-header></app-header>
    <!-- 左侧导航 -->
    <app-nav></app-nav>
    <!-- 右侧主要区域 -->
    <app-main>
    </app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppNav from './AppNav'
import AppMain from './AppMain'
export default {
  name: '',
  components: {
    AppHeader,
    AppNav,
    AppMain
  },
}
</script>

<style scoped lang='scss'>
.layout {
  /* 头部 */
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 64px;
    background-color: #2b83f9;
    background-image: linear-gradient(
      143deg,
      #2945cb 20%,
      #2b83f9 81%,
      #3a9dff
    );
  }
  /* 左侧导航 */
  .nav {
    position: absolute;
    top: 64px;
    left: 0;
    bottom: 0;
    background: rgb(50, 64, 87);
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  /* 右侧主要区域 */
  .main {
    position: absolute;
    top: 64px;
    right: 0;
    left: 240px;
    bottom: 0;
    overflow-y: auto;
  }
}
</style>