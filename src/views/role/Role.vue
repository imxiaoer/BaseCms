<template>
  <div class="role-box">
    <toolbox/>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            @click="edit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="cover-el-pagination"
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
  </div>
</template>

<script>
import toolbox from '@/components/toolbox/toolbox'
export default {
  components: {
    toolbox
  },
  data () {
    return {
      list: [],
      tableData: [{
        date: '2016-05-02',
        name: '角色管理',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '角色管理',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '角色管理',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '角色管理',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$api.roles.list({ p: 1, user_key: localStorage.getItem('key') }).then(res => {
        this.list = res.data.data
        console.log(res)
      })
    },
    edit () {},
    remove () {}
  }
}
</script>

<style lang="scss" scoped>
.role-box {
  padding: 40px 20px 20px 20px;
}
</style>
