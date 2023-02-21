// 二开控件的例子

// 入口文件
// 这里不需要写 mixins: [XtWeb.Engine.UI.View]

import View from './view.vue'

export default {
  name: 'dep-erkai-demo',
  props: ['ctrl'], // 组件的控制器
  render (h) {
    const ctrl = this.ctrl
    // 业务组件
    return h(View, {
      props: {
        ctrl
      }
    })
  },
  // 这里关联组件控制器的文件路径
  // *固定写法不用修改
  $ctrl: () => require('./ctrl.js').default
}
