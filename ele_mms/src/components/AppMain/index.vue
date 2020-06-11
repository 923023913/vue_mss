<template>
  <div
    class="main"
    id="main"
  >
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
     <el-breadcrumb-item v-if="$route.path == '/'">首页</el-breadcrumb-item>
      <template v-if="$route.path != '/'">
        <el-breadcrumb-item :to="{ path: '/' }"><span class="path_index">首页</span></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">{{ $route.meta.title[0] }}</a></el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title[1] }}</el-breadcrumb-item>
      </template>

    </el-breadcrumb>
    <!-- 路由视图容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
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
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped lang='scss'>
</style>