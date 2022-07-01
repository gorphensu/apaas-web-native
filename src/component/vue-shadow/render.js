export default {
  name: 'giaogiaotesttt',
  props: ['ctrl'],
  render (h) {
    return h('div', {
      props: {
        ctrl: this.ctrl
      },
      style: {
        ...this.ctrl.viewStyle,
        width: '100%',
        height: '100%'
      },
      attrs: {
        id: this.ctrl.code
      }
    })
  },
  watch: {},
  created () {
    this.view = null
  },
  mounted () {
    const that = this
    setTimeout(() => {
      // 原有系统注册过window.Vue对象，在新引入的element-ui会自动install到Vues上，污染引擎系统的Vue.
      // 为避免此问题，需要在引入新版element-ui之前先清空window.Vue
      const globalVue = window.Vue
      window.Vue = undefined

      const Vue = require('vue').default
      const ElementUI = require('element-ui')
      Vue.use(ElementUI)
      // 完成element-ui 注册后，还原回原有的window.Vue
      window.Vue = globalVue

      const App = require('./App.vue').default
      const view = new Vue({
        render (h) {
          return h(App, {
            props: {
              // 将ctrl控制器作为属性传入
              // 这里ctrl与view实际上是属于两个不同的Vue对象。两者的响应式是相互隔离的。
              // 开发者需要将两者的区分开。使用ctrl.$watch功能，自行监听ctrl数据的变化，从而打通连着的隔离状态。
              ctrl: that.ctrl
            }
          })
        }
      })
      this.view = view
      view.$mount(this.$el)
    })
  },
  $ctrl: () => require('./ctrl.js').default
}
