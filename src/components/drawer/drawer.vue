<template>
  <div class="drawer" :class="{ active: control }">
    <div :class="mask && value ? 'mask-show' : 'mask-hide'" @click="closeByMask"></div>
    <div :class="value ? 'open' : 'close'">
      <div class="drawer-head">
        <span style="float: left;">{{ title }}</span>
        <span style="float: right;">X</span>
      </div>
      <div class="drawer-body">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否打开
    value: {
      type: Boolean
    },

    // 标题
    title: {
      type: String
    },

    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: false
    },

    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true
    },

    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },

    // 宽度
    width: {
      type: String,
      default: '40%'
    },

    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      control: this.value
    }
  },
  mounted () {
    console.log(this.control)
    let box = this.$el.parentNode.parentNode
    box.style.position = 'relative'
  },
  methods: {
    closeByMask () {
      console.log(this.control)
      if (this.maskClosable) {
        this.$emit('close')
      }
    },
    closeByButton () {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
    opacity: 1;
    transition: opacity .5s;
  }
  .mask-hide {
    opacity: 0;
    transition: opacity .5s;
  }

  /* 滑块 */
  .close {
    position: fixed;
    z-index: 10;
    right: -300px;
    top: 0;
    width: 300px;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all 0.5s;
  }
  .open {
    position: fixed;
    z-index: 10;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: #fff;
    opacity: 1;
    transition: all 0.5s;
    .drawer-head {
      height: 45px;
      line-height: 45px;
      padding: 0 15px;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
    }
    .drawer-body {
      font-size: 14px;
      padding: 15px;
    }
  }
}
</style>
