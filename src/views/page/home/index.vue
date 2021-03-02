<template>
  <Menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <router-link to="/detail">页面一</router-link>
    </a-menu-item>
    <a-menu-item key="app">
      <router-link to="/detail">页面二</router-link>
    </a-menu-item>
    <a-menu-item key="app">
      <a-button @click="onClick">点我点我点我</a-button>
    </a-menu-item>
    <a-sub-menu> </a-sub-menu>
  </Menu>
  <router-view></router-view>
</template>

<script lang="ts">
import { Menu } from "ant-design-vue";
import { ref, defineComponent, inject } from "vue";
export default defineComponent({
  components: { Menu },
  setup() {
    const current = ref<string[]>(["mail"]);
    const $modalRouter: any = inject("$modalRouter");
    const onClick = () => {
      $modalRouter.push({
        name: "a-a",
      });
    };
    return {
      current,
      $modalRouter,
      onClick,
    };
  },
});
</script>

<style scoped></style>
