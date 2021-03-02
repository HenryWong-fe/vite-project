<template>
  <a-page-header
    title="Title"
    :breadcrumb="{ routes }"
    sub-title="This is a subtitle"
  ></a-page-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useRoutes from "@/hooks/useBreadcrumb";
export default defineComponent({
  setup() {
    const { routes } = useRoutes();
    return {
      routes,
    };
  },
});
</script>
