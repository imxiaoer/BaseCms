<template>
  <div class="box">
    <div class="search-box">
      <el-form :inline="true" :model="search">
        <el-form-item label="姓名">
          <el-input v-model="search.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="init">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <toolbox :quantity="selected.length" @add="add" @batchRemove="batchRemove"/>

    <el-table :data="list">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="CreateTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="Name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="RoleId" label="角色" width="180"></el-table-column>
      <el-table-column prop="Mobile" label="手机" width="180"></el-table-column>
      <el-table-column prop="Address" label="地址"></el-table-column>
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
      :page-size="search.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change="indexChange">
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
        index: 1,
        size: 10
      }
    }
  },
  created () {
    Object.assign(this.singleCopy, this.single)
    this.init()
  },
  methods: {
    init () {
      this.$api.users.list(this.search).then(res => {
        this.list = res.data.data.list
        this.total = res.data.data.total
      })
    },
    add () {},
    edit () {},
    remove () {},
    batchRemove () {},
    sizeChange ($event) {
      this.search.size = $event
      this.init()
    },
    indexChange ($event) {
      this.search.index = $event
      this.init()
    }
  }
}
</script>
