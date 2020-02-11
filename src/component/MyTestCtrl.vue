<template>
  <div class="my-testctrl">
    <div class="inner">inner chang2e
      <div class="test">inner test</div>
      <div>{{viewRule}}</div>
    </div>
  </div>
</template>

<script>
import './index.less'
import XtWeb from 'xtion-web'
export default {
  name: 'my-testctrl',
  mixins: [XtWeb.Engine.UI.View],
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .my-testctrl {
    font-size: 18px;
    border-radius: 20px;
  }
</style>
