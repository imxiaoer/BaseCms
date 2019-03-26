<template>
  <el-container class="home-box">
    <el-aside width="200px" class="cover-el-aside">
      <div class="logo">BaseCms</div>
      <xmenu/>
    </el-aside>
    <el-container class="cover-el-container">
      <el-header class="cover-el-header">
        <xhead/>
      </el-header>
      <el-main class="cover-el-main">
        <navtab :tabs="tabs" :current="current" @navclick="clicktab" @navclose="closetab"/>
        <keep-alive><router-view/></keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import xmenu from '@/components/menu/menu'
import xhead from '@/components/head/head'
import navtab from '@/components/navtab/navtab'
export default {
  name: 'home',
  components: {
    xmenu,
    xhead,
    navtab
  },
  methods: {
    ...mapMutations(['setCurrent', 'addTabs', 'removeTabs']),
    clicktab (name) {
      this.setCurrent(name)
      this.$router.push(name)
    },
    closetab (index, name) {
      this.removeTabs(index)
      if (this.current === name) {
        this.setCurrent(this.tabs[this.tabs.length - 1].name)
        this.$router.push(this.current)
      }
    }
  },
  computed: {
    ...mapState({
      current: state => state.navtab.current,
      tabs: state => state.navtab.tabs
    })
  },
  watch: {
    $route (to, from) {
      let flag = false
      for (let item of this.tabs) {
        if (item.name === to.name) {
          this.setCurrent(to.name)
          flag = true
          break
        }
      }
      if (!flag) {
        this.addTabs({
          name: to.name,
          closable: true,
          label: to.meta.text
        })
        this.setCurrent(to.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .logo {
    color: rgba(255,255,255,.8);
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid gray;
    line-height: 60px;
    letter-spacing: 2px;
  }
}
</style>
