<template>
  <div class="user-box">
    <toolbox :quantity="3">
      <el-button @click="showhide" size="small">显示 / 抽屉组件</el-button>
    </toolbox>
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

    <drawer title="抽屉组件" v-model="show">
      <p>姓名：小贰</p>
      <p>性别：男</p>
      <p>爱好：篮球，电影，音乐</p>
      <p>住址：武汉市关山大道保利时代</p>
    </drawer>
  </div>
</template>

<script>
import toolbox from '@/components/toolbox/toolbox'
import drawer from '@/components/drawer/drawer'
export default {
  components: {
    toolbox,
    drawer
  },
  data () {
    return {
      list: [],
      show: false,
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
  methods: {
    edit () {},
    remove () {},
    showhide () {
      this.show = !this.show
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.user-box {
  padding: 40px 20px 20px 20px;
}
</style>
