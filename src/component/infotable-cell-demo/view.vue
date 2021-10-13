<template>
  <div class="erkai-infotable-cell-demo" @click="(e) => ctrl.handleClicked(e)">
    infotable的二开组件demo: <span>{{ ctrl.value }}</span>
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
