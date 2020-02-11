<template>
  <div class="xt-periodicpicker">
    <el-form-item v-if="displayStyle !== 'text'" :label="title || ''" :prop="code" :label-width="titleWidthPix" :rules="rules" :error="errInputText">
      <el-input  v-model="inputValue" />
    </el-form-item>
  </div>
</template>

<script>
import XtWeb from 'xtion-web'
export default {
  mixins: [XtWeb.Widget.UI.InputView],
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped>

</style>
