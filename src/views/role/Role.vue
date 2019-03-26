<template>
  <div class="role-box">
    <toolbox @add="add" @batchRemove="batchRemove" :quantity="3"/>

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

    <el-dialog :title="dialogTitle" :visible.sync="dialogShow" width="500px">
      <el-form :model="single">
        <el-form-item label="角色名称" :label-width="labelWidth">
          <el-input v-model="single.Name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="dialogShow = false">确 定</el-button>
      </div>
    </el-dialog>
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
      }],
      dialogShow: false,
      dialogTitle: '',
      labelWidth: '80px',
      single: {
        Id: '',
        Name: ''
      },
      singleCopy: Object.assign({}, this.single)
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
    add () {
      this.dialogTitle = '新增'
      this.dialogShow = true
      this.single = Object.assign({}, this.singleCopy)
    },
    edit (row) {
      this.dialogTitle = '编辑'
      this.dialogShow = true
      this.single = Object.assign({}, row)
    },
    remove (row) {
      this.$confirm(`确定删除角色 【${row.Name}】 吗?`, '提示', {
        type: 'warning'
      }).then(() => {
        // s
      }).catch(() => {
        console.log('取消删除')
      })
    },
    batchRemove () {
      console.log('ok')
    }
  }
}
</script>

<style lang="scss" scoped>
.role-box {
  padding: 40px 20px 20px 20px;
}
</style>
