<template>
  <div class="role-box">
    <toolbox @add="add" @batchRemove="batchRemove" :quantity="3"/>

    <el-table :data="list" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="addtime" label="日期" width="180"></el-table-column>
      <el-table-column prop="rolename" label="角色名称"></el-table-column>
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
      <el-form :model="single" rel="relform">
        <el-form-item label="角色名称" :label-width="labelWidth">
          <el-input v-model="single.rolename" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="commit('relform')">确 定</el-button>
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
      dialogShow: false,
      dialogTitle: '',
      labelWidth: '80px',
      single: {
        id: '',
        rolename: '',
        addtime: ''
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
    },
    commit (form) {
      this.$api.roles.add()
      console.log(form)
    }
  }
}
</script>

<style lang="scss" scoped>
.role-box {
  padding: 40px 20px 20px 20px;
}
</style>
