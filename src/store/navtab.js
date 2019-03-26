// 标签页模块
const navtab = {
  state: {
    current: 'console',
    tabs: [{
      label: '主 页',
      name: 'console',
      closable: false
    }]
  },
  mutations: {
    addTabs (state, data) {
      state.tabs.push(data)
    },
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
    setCurrent (state, name) {
      state.current = name
    },
    removeAllTabs (state) {
      state.tabs.splice(1, state.tabs.length - 1)
    }
  }
}

export default navtab
