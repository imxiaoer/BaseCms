<template>
  <div class="tool-box">
    <slot/>
    <el-button size="small" type="primary" icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
    <el-button size="small" type="danger" icon="el-icon-delete" @click="remove">批量删除</el-button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: () => 0,
      required: true
    }
  },
  methods: {
    add () {
      this.$emit('add')
    },
    remove () {
      if (this.quantity === 0) {
        this.$message({
          type: 'warning',
          message: '请至少选择一项！'
        })
      } else {
        this.$confirm(`确定删除选中的 ${this.quantity} 条数据吗？`, '提示', {
          type: 'warning'
        }).then(() => {
          this.$emit('batchRemove')
        }).catch(() => {
          console.log('取消删除')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tool-box {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
</style>
