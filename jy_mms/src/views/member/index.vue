<template>
  <div>
    <!-- 查询列表数据 -->
    <el-form
      :inline="true"
      :model="searchMap"
      class="demo-form-inline"
      ref="searchForm"
    >
      <el-form-item prop="cardNum">
        <el-input
          v-model="searchMap.cardNum"
          placeholder="会员卡号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          v-model="searchMap.name"
          placeholder="会员名字"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="payType"
        style="width:110px;"
      >
        <el-select
          v-model="searchMap.payType"
          placeholder="支付类型"
        >
          <el-option
            v-for="item in payTypeOptions"
            :key="item.type"
            :label="item.name"
            :value="item.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="birthday">
        <el-date-picker
          v-model="searchMap.birthday"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="fetchData"
        >查询</el-button>
        <el-button
          type="primary"
          icon="el-icon-edit"
          @click="dialogFormVisible = true"
        >新增</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 会员列表 -->
    <el-table
      :data="list"
      height="380"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        width="60"
      ></el-table-column>
      <el-table-column
        prop="cardNum"
        label="会员卡号"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="会员姓名"
      ></el-table-column>
      <el-table-column
        prop="birthday"
        label="会员生日"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="110"
      ></el-table-column>
      <el-table-column
        prop="integral"
        label="可用积分"
      ></el-table-column>
      <el-table-column
        prop="money"
        label="开卡金额"
      ></el-table-column>
      <el-table-column
        prop="payType"
        label="支付类型"
      >
        <!-- 过滤支付类型 -->
        <template slot-scope="scope">
          {{ scope.row.payType | payTypeFilter }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="会员地址"
        width="180"
      ></el-table-column>
      <el-table-column
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top:10px;"
    >
    </el-pagination>

    <!-- 新增窗口 -->
    <el-dialog
      title="会员编辑"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form
        :model="create"
        style="width:400px;"
        :rules="rules"
        ref="createForm"
      >
        <el-form-item
          label="会员卡号"
          :label-width="formLabelWidth"
          prop="cardNum"
        >
          <el-input
            v-model="create.cardNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="会员姓名"
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input
            v-model="create.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="会员生日"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="create.birthday"
            type="date"
            placeholder="会员生日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item
          label="手机号码"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="create.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="开卡金额"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="create.money"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="可用积分"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="create.integral"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="支付类型" :label-width="formLabelWidth">
          <el-input v-model="create.name" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item
          label="会员地址"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="create.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="createData('createForm')"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getPageList } from '@/api/member';
// 支付类型
const payTypeOptions = [
  { type: '1', name: '现金' },
  { type: '2', name: '微信' },
  { type: '3', name: '支付宝' },
  { type: '4', name: '银行卡' },
];
export default {
  name: '',
  data () {
    return {
      list: [], // 会员列表
      total: 0, // 记录总条数
      currentPage: 1, // 当前页，默认第1页
      pageSize: 10, // 每页显示条数，10条
      payTypeOptions, // 支付类型
      searchMap: { // 条件查询绑定条件值
        cardNum: '',
        name: '',
        payType: '',
        birthday: ''
      },
      // 新增窗口是否显示
      dialogFormVisible: false,
      // 表单input宽度
      formLabelWidth: '120px',
      // 新增表单数据
      create: {
        cardNum: null,
        address: null,
        birthday: null,
        integral: 0,
        money: 0,
        name: null,
        payType: null,
        phone: null
      },
      // 新增表单验证
      rules: {
        cardNum: [
          { required: true, message: '卡号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ]
      }
    };
  },
  created () {
    this.fetchData();
  },
  filters: {
    // 过滤支付类型
    payTypeFilter (type) {
      return type
        ? payTypeOptions.find((item) => item.type == type).name
        : null;
    },
  },
  methods: {
    // 点击新增弹框的确定新增数据
    createData (formName) {
      this.$refs[formName].validate(valid=>{
        if (valid) {
          
        }
      })
    },
    // 点击重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    // 代表每页显示条数
    handleSizeChange (value) {
      this.pageSize = value;
      // 重新发送请求获取数据
      this.fetchData();
    },
    // 改变当前页
    handleCurrentChange (value) {
      // 修改当前页数
      this.currentPage = value;
      // 重新发送请求获取数据
      this.fetchData();
    },
    // 请求会员列表数据分页
    fetchData () {
      getPageList(this.currentPage, this.pageSize, this.searchMap).then(
        (res) => {
          const resp = res.data;
          this.list = resp.data.rows;
          this.total = resp.data.total;
          console.log(this.list)
        }
      );
    },
    handleEdit (id) {
      console.log(id);
    },
    handleDelete (id) {
      console.log(id);
    },
  },
};
</script>

<style scoped lang='scss'></style>
