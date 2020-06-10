<template>
  <div class="main" id="main">
    <!-- 面包屑导航 -->
    <app-link v-show="$route.path !== '/home'"></app-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from './Link'
export default {
  name: 'Main',
  components:{
    AppLink
  }
}
</script>

<style scoped lang='scss'>
</style>