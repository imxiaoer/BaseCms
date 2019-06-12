<template>
  <div class="box">
    <toolbox :quantity="selected.length" @add="add" @batchRemove="batchRemove"/>

    <el-table :data="tableData">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
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
import model from '@/model/user'
export default {
  components: { toolbox },
  data () {
    return {
      list: [],
      single: {
        Id: '',
        CreateDate: '',
        RoleId: '',
        Name: '',
        Mobile: '',
        Address: ''
      },
      singleCopy: {},
      selected: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created () {
    Object.assign(this.singleCopy, this.single)
  },
  methods: {
    get () {
      this.$api.users.list().then(res => {
        this.list = res.data.list
        this.total = res.data.total
      })
    },
    add () {},
    edit () {},
    remove () {},
    batchRemove () {}
  }
}
</script>
