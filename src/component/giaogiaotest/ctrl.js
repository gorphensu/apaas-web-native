import XtWeb from 'xtion-web'
import Render from './index.js'

export default {
  name: 'giaogiaotestctrl',
  mixins: [XtWeb.Engine.BaseController],
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
