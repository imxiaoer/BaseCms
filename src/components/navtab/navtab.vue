<template>
  <div class="nav-tab">
    <el-tag
      class="cover-el-tag"
      type="info"
      v-for="(t, index) of tabs"
      :key="t.name"
      :closable="t.closable"
      :color="(t.name === activeName ? '#ddd' : '#fff')"
      @click="click(t.name)"
      @close="close(index)">{{t.label}}</el-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [{
        label: '主 页',
        name: 'console',
        closable: false
      },{
        label: '角色',
        name: 'role',
        closable: true
      },{
        label: '用户',
        name: 'user',
        closable: true
      },{
        label: '权限',
        name: 'permission',
        closable: true
      },{
        label: '修改密码',
        name: 'password',
        closable: true
      }],
      activeName: 'role'
    }
  },
  methods: {
    click (name) {
      this.activeName = name
      this.$router.push(name)
    },
    close (index) {
      this.tabs.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-tab {
  padding: 5px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f5f5f5;
}
</style>


