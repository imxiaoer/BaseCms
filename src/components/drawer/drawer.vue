<template>
  <div class="drawer" v-show="show" @click.capture.stop="close">
    <div class="modal" :class="[show ? 'modal-show' : 'modal-hide']"></div>
    <div class="slider" :class="[show ? 'slider-open' : 'slider-close']">
      <div class="slider-title">{{ title }}</div>
      <div class="slider-content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'show'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 11;
  transition: opacity 1s;
}
.modal-show {
  opacity: 1;
}
.modal-hide {
  opacity: 0;
}
.slider {
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #fff;
  z-index: 12;
  transition: all 1s;
}
.slider-open {
  transform: translateX(0);
}
.slider-close {
  transform: translateX(100%);
}
.slider-title {
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
</style>
