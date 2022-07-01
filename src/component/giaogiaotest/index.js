import View from './view.vue'
export default {
  name: 'giaogiaotest',
  props: ['ctrl'],
  render (h) {
    const value = this.ctrl.value
    return h(View, {
      props: {
        value
      }
    })
  },
  $ctrl: () => require('./ctrl.js').default
}
