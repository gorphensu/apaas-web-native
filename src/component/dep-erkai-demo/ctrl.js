import XtWeb from 'xtion-web'
import Render from './index.js' // 必须指向 ./index.js

/**
 * Controller 控制器
 * 表格在渲染单元格组件前，先会创建该组件的控制器，控制器存放组件的value值等数据
*/

export default {
  name: 'dep-erkai-demo-ctrl',
  mixins: [XtWeb.Engine.BaseController], // 必须继承 BaseController 基础组件
  created () {
    if (this.viewRule.value) {
      this.value = this.executeLogicExpression(this.viewRule.value, this.engine)
    }
  },
  methods: {
    // 渲染函数，该方法会在infotable内部调用
    // *固定写法不必修改
    publicRender (h) {
      // Render 组件渲染器，用于渲染视图
      return h(Render, {
        props: {
          ctrl: this
        }
      })
    },
    // 取值方法
    // 可以通过getter对象判断要取的值或其他属性值
    getView (type, getter) {
      return this.value
    },
    // 设值方法
    // 可以通过setter对象判断要设置的值或其他属性值
    setView (data, type, setter) {
      if (typeof data === 'number') {
        data = String(data)
      }
      this.value = data
    }
  }
}
