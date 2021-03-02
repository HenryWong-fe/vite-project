<template>
  <component :is="layoutComponent"></component>
  <ModalRouterView />
</template>

<script>
import { layoutMap } from "@/views/layout/index";
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
  computed: {
    layoutComponent() {
      return layoutMap[this.$route.meta.layout];
    },
  },
  setup() {
    console.log("import.meta.env", import.meta.env);
  },
});
</script>
