<template>
  <a-modal v-bind="$attrs">
    <slot></slot>
  </a-modal>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'Modal',
  setup() {
  }
})
</script>