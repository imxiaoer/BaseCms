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
        <navtab :tabs="" :current=""/>
        <keep-alive><router-view/></keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
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
  watch: {
    $route (to, from) {
      let flag = false
      for (let item of this.openTabs) {
        if (item.name === to.name) {
          this.setActiveName(to.name)
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
        this.setActiveName(to.name)
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

