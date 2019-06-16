<template>
  <div class="box">
    <toolbox :quantity="selected.length" @add="add" @batchRemove="batchRemove"/>
    <div class="item">
      <div class="parent">
        <span>用户</span>
        <span>
          <i class=""></i>
          <i class=""></i>
        </span>
      </div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
</template>

<script>
import toolbox from '@/components/toolbox/toolbox'
export default {
  components: { toolbox },
  data () {
    return {
      list: [],
      selected: []
    }
  },
  methods: {
    add () {},
    batchRemove() {}
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 200px;
  height: 250px;
  background-color: #ddd;
  .parent {
    height: 30px;
    background-color: orange;
    padding: 0 5px;
  }
  .child {
    margin-top: 10px;
    height: 30px;
    background-color: orange;
    padding: 0 5px;
  }
}
</style>

