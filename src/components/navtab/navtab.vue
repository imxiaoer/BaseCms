<template>
  <div class="nav-tab">
    <el-tag
      class="cover-el-tag"
      type="info"
      v-for="(t, index) of tabs"
      :key="t.name"
      :closable="t.closable"
      :color="(t.name === current ? '#ddd' : '#fff')"
      @click="click(t.name)"
      @close="close(index, t.name)">{{t.label}}</el-tag>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => []
    },
    current: {
      type: String,
      required: true,
      default: () => 'console'
    }
  },
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
      }]
    }
  },
  methods: {
    click (name) {
      this.current = name
      this.$router.push(name)
    },
    close (index, name) {
      this.tabs.splice(index, 1)
      if (this.current === name) {
        this.current = this.tabs[this.tabs.length - 1].name
        this.$router.push(this.current)
      }
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


