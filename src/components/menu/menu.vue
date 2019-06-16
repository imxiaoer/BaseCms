<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="$route.path"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b">
    <el-menu-item index="/console">
      <i class="el-icon-location"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-menu"></i>
      <span slot="title">用户</span>
    </el-menu-item>
    <el-menu-item index="/role">
      <i class="el-icon-document"></i>
      <span slot="title">角色</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item index="/profile">基本资料 (空)</el-menu-item>
      <el-menu-item index="/password">修改密码 (空)</el-menu-item>
    </el-submenu>
    <el-menu-item index="authority">
      <i class="el-icon-share"></i>
      <span slot="title">权限</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
