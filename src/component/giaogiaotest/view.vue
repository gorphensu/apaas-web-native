<template>
  <div>
    giaogiaotest: <span>{{ value }}</span>
    <div id="app">
      app
    </div>
  </div>
</template>

<script>
import './index.less'
export default {
  name: 'view',
  props: {
    value: String
  }
}
</script>
