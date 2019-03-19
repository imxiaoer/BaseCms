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
        <div class="nav-tab">
          <el-tag type="info" color="#fff">主 页</el-tag>
          <el-tag type="info" closable color="#fff">用户</el-tag>
          <el-tag closable color="#eee">角色</el-tag>
          <el-tag type="info" closable color="#fff">权限</el-tag>
          <el-tag type="info" closable color="#fff">设置</el-tag>
        </div>
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
      .nav-tab {
        padding: 5px;
        background-color: #f9f9f9;
        border-bottom: 1px solid #f5f5f5;
        .el-tag {
          margin: 0 5px;
          border-radius: 0;
          border: none;
          cursor: pointer;
        }
      }
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

