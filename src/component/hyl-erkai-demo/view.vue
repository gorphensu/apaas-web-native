<template>
  <div class="erkai-hyl-erkai-demo">
    <!-- 解决事件冲突：带有 class="stop-row-check" 的元素及其子元素，阻止行点击勾选事件   -->
    <span class="stop-row-check" @click="(e) => ctrl.handleClicked(e)">
      <!-- 国际化 -->
      <span style="color: blue">{{ $t('二开示例') }}：</span>
      <span class="hyl-erkai-demo-value">{{ ctrl.value }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'view',
  props: {
    ctrl: Object
  }
}
</script>
