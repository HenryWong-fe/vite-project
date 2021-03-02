import { defineComponent, h, inject, ref } from "vue";
// import useModalRouter from "./hooks";

export default defineComponent({
  name: "ModalRouterView",
  setup(props, ctx) {
    // 使用？的原因及解决方案 https://www.jianshu.com/p/12faae13496d
    // 这里的_runningRoutes是proxy包装对象 数据是响应式的
    const _runningRoutes: any = inject("_runningRoutes");
    // 渲染函数中没有与 v-model 的直接对应——必须自己实现相应的逻辑：
    return () =>
      h(
        "div",
        {},
        _runningRoutes.map((runningRoute) => {
          return h(runningRoute.component, {
            on: runningRoute.on,
            props: runningRoute.props,
            ModalComponent: runningRoute,
          });
        })
      );
  }
});
