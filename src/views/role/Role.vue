<template>
  <div class="box">
    <toolbox :quantity="selected.length" @add="add" @batchRemove="batchRemove"/>

    <el-table :data="list" @selection-change="select">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="CreateTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="Name" label="角色名称"></el-table-column>
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
      :total="total">
    </el-pagination>

    <el-dialog :title="dialogTitle" :visible.sync="dialogShow" width="400px" @closed="clearValidate('relform')">
      <el-form :model="single" ref="relform" :rules="rules">
        <el-form-item label="角色名称" :label-width="labelWidth" prop="Name">
          <el-input v-model.trim="single.Name" autocomplete="off"></el-input>
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
  components: { toolbox },
  data () {
    return {
      list: [],
      total: 0,
      single: { Id: null, Name: '' },
      singleCopy: {},
      dialogShow: false,
      dialogTitle: '',
      labelWidth: '80px',
      selected: [],
      rules: {
        Name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    Object.assign(this.singleCopy, this.single)
    this.init()
  },
  methods: {
    init () {
      this.$api.roles.list().then(res => {
        this.list = res.data.data.list
        this.total = res.data.data.total
      })
    },
    select (selected) {
      this.selected = selected
    },
    add () {
      // 每次新增初始化表单
      this.single = Object.assign({}, this.singleCopy)
      this.dialogTitle = '新增'
      this.dialogShow = true
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
        this.onRemove([row.Id])
      }).catch(() => {})
    },
    batchRemove () {
      let ids = this.selected.map(item => item.Id)
      this.onRemove(ids)
    },
    commit (form) {
      this.single.Id ? this.onEdit() : this.onAdd()
    },
    onAdd () {
      this.$api.roles.add(this.single).then(res => {
        this.$notify.success({ title: '提示', message: '新增成功' })
        this.dialogShow = false
        this.init()
      })
    },
    onEdit () {
      this.$api.roles.modify(this.single).then(res => {
        this.$notify.success({ title: '提示', message: '修改成功' })
        this.dialogShow = false
        this.init()
      })
    },
    onRemove (ids) {
      this.$api.roles.remove(ids).then(res => {
        this.$notify.success({ title: '提示', message: '删除成功' })
        this.init()
      })
    },
    clearValidate (formName) {
      this.$refs[formName].clearValidate()
    }
  }
}
</script>
