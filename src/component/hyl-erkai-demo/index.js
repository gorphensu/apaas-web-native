// 二开控件的例子

// 入口文件
// 这里不需要写 mixins: [XtWeb.Engine.UI.View]

import View from './view.vue'
import XtWeb from 'xtion-web'

const { qs } = XtWeb.Dynamic.getLib('lib1common')

export default {
  name: 'hyl-erkai-demo',
  props: ['ctrl'], // 组件的控制器
  created () {
    // eslint-disable-next-line no-eval
    console.log('qs', qs.parse('http://localhost:9800/#/page?pagecode=1542342823058215011'))
  },
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
