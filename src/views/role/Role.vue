<template>
  <div class="role-box">
    <toolbox/>
    <el-table
      :data="tableData"
      style="width: 100%">
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
    </el-table>
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
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$api.roles.list({ p: 1, user_key: localStorage.getItem('key') }).then(res => {
        this.list = res.data.data
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.role-box {
  padding: 20px;
}
</style>

