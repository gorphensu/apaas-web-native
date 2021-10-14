// 这是infotable 内使用的二开控件的例子

// 入口文件
// 这里不需要写 mixins: [XtWeb.Engine.UI.View]

import View from './view.vue'
export default {
  name: 'infotable-cell-demo',
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

/* 协议配置例子：
*       {
          'type': 'infotable',
          'code': 'infotable-465465346546546545',
          'name': 'infotable表格',
          'title': 'infotable表格',
          ...
          'cols': [
            {
              'type': 'infotable-cell-demo',
              'code': 'tablecell-01',
              'name': 'infotable-cell-demo',
              'title': 'infotable-cell-demo', // 通用属性:标题
              'sort': '1', // 通用属性:列排序
              'hidden': '0', // 通用属性:隐藏列
              'eventlist': [{
                'trigger': 'onclicked', // 注册事件
                'handler': 'handler_clicked_test'
              }],
              'width': '300' // 通用属性:列宽度
            }
          ]
        }
* */
