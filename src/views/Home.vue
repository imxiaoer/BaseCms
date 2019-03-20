<template>
  <el-container class="home-box">
    <el-aside width="200px">
      <div class="logo">
        BaseCms
      </div>
      <xmenu/>
    </el-aside>
    <el-container>
      <el-header>
        <xhead/>
      </el-header>
      <el-main>
        <navtab/>
        <keep-alive>
          <router-view/>
        </keep-alive>
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
  }
}
</script>

<style lang="scss" scoped>
.home-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      height: 100%;
      padding: 0;
    }
  }
  .el-aside {
    background-color: #20222A;
    height: 100vh;
    min-height: 100%;
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
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 60px;
  }
}
</style>

