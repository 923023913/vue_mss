<template>
  <div>
    <!-- 头部区域 -->
    <app-header></app-header>
    <!-- 左侧导航栏 -->
    <app-navbar></app-navbar>
    <!-- 右侧主要区域 -->
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppMain from './AppMain'
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {

  },
  computed: {
  },
  components: {
    AppHeader,
    AppNavbar,
    AppMain
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped lang='scss'>
/* 头部区域 */
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  background-color: #2d3a4b;
}
/* 左侧导航栏 */
.navbar {
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #545c64;
}
/* 右侧主要区域 */
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  right: 0;
  bottom: 0;
  padding: 10px;
  overflow-y: auto;
}
</style>