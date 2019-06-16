<template>
  <div class="box">
    <div class="search-box">
      <el-form :inline="true" :model="search" ref="searchForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="search.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="search.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roleid">
          <el-select v-model="search.roleid" placeholder="请选择角色">
            <el-option v-for="r of roles" :label="r.Name" :value="r.Id" :key="r.Id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="get">查询</el-button>
          <el-button type="info" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <toolbox :quantity="selected.length" @add="add" @batchRemove="batchRemove"/>

    <el-table :data="list" @selection-change="select">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="CreateTime" label="日期"></el-table-column>
      <el-table-column prop="Name" label="姓名"></el-table-column>
      <el-table-column label="角色">
        <template v-slot="scope">
          {{scope.row.RoleId | showName(roles)}}
        </template>
      </el-table-column>
      <el-table-column prop="Mobile" label="手机"></el-table-column>
      <el-table-column prop="Address" label="地址" width="250"></el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template v-slot="scope">
          <el-button size="mini" type="primary" plain @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="cover-el-pagination"
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="search.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change="indexChange">
    </el-pagination>

    <el-dialog :title="dialogTitle" :visible.sync="dialogShow" width="400px"
      @closed="clearValidate('relform')" :close-on-click-modal="false">
      <el-form :model="single" ref="relform" :rules="rules">
        <el-form-item label="用户名称" :label-width="labelWidth" prop="Name">
          <el-input v-model.trim="single.Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属角色" :label-width="labelWidth" prop="RoleId">
          <el-select v-model="single.RoleId" placeholder="请选择角色">
            <el-option v-for="r of roles" :label="r.Name" :value="r.Id" :key="r.Id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="labelWidth" prop="Mobile">
          <el-input v-model.trim="single.Mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现居地址" :label-width="labelWidth" prop="Address">
          <el-input v-model.trim="single.Address" autocomplete="off"></el-input>
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
      single: {
        Id: null,
        RoleId: '',
        Name: '',
        Mobile: '',
        Address: '',
        CreateTime: ''
      },
      singleCopy: {},
      selected: [],
      search: {
        name: '',
        mobile: '',
        roleid: '',
        index: 1,
        size: 10
      },
      dialogShow: false,
      dialogTitle: '',
      labelWidth: '80px',
      rules: {
        Name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
        Mobile: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        RoleId: [{ required: true, message: '请选择角色', trigger: 'blur' }]
      },
      roles: []
    }
  },
  created () {
    Object.assign(this.singleCopy, this.single)
    this.init()
  },
  methods: {
    init () {
      this.getRoles().then(() => {
        this.get()
      })
    },
    getRoles () {
      return this.$api.role.list().then(res => {
        this.roles = res.data.data.list
      })
    },
    get () {
      this.$api.user.list(this.search).then(res => {
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
      this.single = Object.assign({}, row)
      this.dialogTitle = '编辑'
      this.dialogShow = true
    },
    remove (row) {
      this.$confirm(`确定删除用户 【${row.Name}】 吗?`, '提示', {
        type: 'warning'
      }).then(() => {
        this.onRemove([row.Id])
      }).catch(() => {})
    },
    batchRemove () {
      let ids = this.selected.map(item => item.Id)
      this.onRemove(ids)
    },
    clearValidate (formName) {
      this.$refs[formName].clearValidate()
    },
    commit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.single.Id ? this.onEdit() : this.onAdd()
        } else {
          return false
        }
      })
    },
    onAdd () {
      this.$api.user.add(this.single).then(res => {
        this.$notify.success({ title: '提示', message: '新增成功' })
        this.dialogShow = false
        this.get()
      })
    },
    onEdit () {
      this.$api.user.modify(this.single).then(res => {
        this.$notify.success({ title: '提示', message: '修改成功' })
        this.dialogShow = false
        this.get()
      })
    },
    onRemove (ids) {
      this.$api.user.remove(ids).then(res => {
        this.$notify.success({ title: '提示', message: '删除成功' })
        this.get()
      })
    },
    sizeChange ($event) {
      this.search.size = $event
      this.get()
    },
    indexChange ($event) {
      this.search.index = $event
      this.get()
    },
    resetSearch () {
      this.$refs['searchForm'].resetFields()
      this.get()
    }
  },
  filters: {
    showName (value, source) {
      let target = source.filter(item => item.Id === value)
      if (target.length > 0) {
        return target[0].Name
      }
      return value
    }
  }
}
</script>
