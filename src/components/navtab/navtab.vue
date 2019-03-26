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
  methods: {
    click (name) {
      this.$emit('navclick', name)
    },
    close (index, name) {
      this.$emit('navclose', index, name)
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
