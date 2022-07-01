import XtWeb from 'xtion-web'
import Render from './render.js'
/**
 * controller控制器，所有的状态数据需要放入这里进行统一管理
 */
export default {
  name: 'shadowvue',
  mixins: [XtWeb.Engine.BaseController],
  data () {
    return {}
  },
  created () {
    if (this.viewRule.value) {
      this.value = this.executeLogicExpression(this.viewRule.value, this.engine)
    }
  },
  methods: {
    publicRender (h) {
      return h(Render, {
        props: {
          ctrl: this
        }
      })
    },
    setViewValue (data) {
      this.value = data
    },
    getViewValue () {
      return this.value
    }
  }
}
