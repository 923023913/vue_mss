<template>
  <div class="list">
    <el-table
      ref="singleTable"
      :data="list"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%;"
      :header-cell-style="{fontWeight:'700',color:'#000',background:'#eef1f6'}"
    >
      <el-table-column
        property="id"
        label="#"
      >
      </el-table-column>
      <el-table-column
        property="registe_time"
        label="注册日期"
      >
      </el-table-column>
      <el-table-column
        property="username"
        label="用户姓名"
      >
      </el-table-column>
      <el-table-column
        property="city"
        label="注册地址"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getUserList } from '@/api/elm'
export default {
  name: '',
  data () {
    return {
      list: [],    // 用户列表
      currentRow: null,
      currentPage: 1,
      total: 5008,
    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  created () {
    this.getUserList()
  },
  methods: {
    handleCurrentChange (val) {
      this.currentRow = val;
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getUserList()
    },
    getUserList () {
      getUserList(this.currentPage, 20).then(res => {
        if (res.status === 200) {
          this.list = res.data
          console.log(res)
        }
      })
    }
  },
}
</script>

<style scoped lang='scss'>
.list {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-table::before,
.el-table::after {
  content: '';
  top: 0;
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #dfe6ec;
}
.el-table::before {
  left: 0;
}
.el-table::after {
  right: 0;
}
</style>