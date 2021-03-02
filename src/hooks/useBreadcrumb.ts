import { ref } from "vue";
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

// 获取当前路由
function useRoutes() {
  const routes = ref<Route[]>([
    {
      path: "home",
      breadcrumbName: "home",
    },
    {
      path: "categray",
      breadcrumbName: "目录",
      children: [
        {
          path: "detail",
          breadcrumbName: "详情",
        },
      ],
    },
  ]);
  return { routes };
}

export default useRoutes;
