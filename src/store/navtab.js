// 标签页模块
const navtab = {
  state: {
    activeName: 'console',
    openTabs: [{
      label: '主 页',
      name: 'console',
      closable: false // 是否可以关闭
    }]
  },
  mutations: {
    // 添加标签页
    addTabs (state, data) {
      state.openTabs.push(data)
    },
    // 移除标签页
    removeTabs (state, route) {
      let index = 0
      for (let item of state.openTabs) {
        if (item.name === route) {
          break
        }
        index++
      }
      state.openTabs.splice(index, 1)
    },
    // 设置被激活的标签页
    setActiveName (state, index) {
      state.activeName = index
    },
    removeAllTabs (state) {
      state.openTabs.splice(1, state.openTabs.length - 1)
    }
  }
}

export default navtab
