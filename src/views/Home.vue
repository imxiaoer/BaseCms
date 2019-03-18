<template>
  <el-container class="home-box">
    <el-aside width="asideWidth">
      <div class="logo">
        <img src="./../assets/logo.png" alt="ELementUI" width="122" height="27">
      </div>
      <xmenu/>
    </el-aside>
    <el-container>
      <el-header>
        <xhead/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import xmenu from '@/components/menu/menu'
import xhead from '@/components/head/head'
export default {
  name: 'home',
  components: {
    xmenu,
    xhead
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
      background-color: #20222A;
      color: rgba(255,255,255,.8);
      text-align: center;
      height: 60px;
      padding-top: 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid gray;
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

