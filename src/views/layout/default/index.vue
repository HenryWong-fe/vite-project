<template>
  <a-config-provider>
    <a-layout>
      <!-- 侧边栏 -->
      <a-layout-sider width="200" style="background: #fff">
        <sidebar class="sidebar-container" />
      </a-layout-sider>
      <a-layout>
        <!-- 顶部导航栏 -->
        <navbar />
        <a-layout-content style="padding: 0 24px 24px">
          <!-- 内容容器 -->
          <app-main
            :style="{ background: '#fff', padding: '24px', margin: 0 }"
          />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMain from "./components/AppMain.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default defineComponent({
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
});
</script>
