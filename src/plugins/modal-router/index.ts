import { shallowReactive, ref } from "vue";
import ModalRouterView from "./modal-view";

interface Option {
  model: string;
  delay: number;
  routes: any[];
}
interface ModalOption {
  mid: number;
  name: string;
  on: any;
  component: any; 
  props: any;
}
const toPascalName = (name) => {
  return name
    .replace(/-([a-z])/g, (r, $1) => $1.toUpperCase())
    .replace(/^[a-z]/, (r) => r.toUpperCase());
};

let _globalMid = 0;

export const ModalRouter = class ModalRouter {
  _routes: any; // 弹窗相关路由
  _runningRoutes: any; // 当前在使用中的弹窗组件
  _option: Option;
  // _beforeEachOpenHooks: Function[];
  // _afterEachCloseHooks: Function[];
  constructor(option: Option) {
    this._option = option;
    this._routes = option.routes;
    this._runningRoutes = shallowReactive([]);
    // 用于存储当前使用中的弹窗调用栈
    /**
     * @description 无需求，暂不实现
     * _beforeEachOpenHooks 弹窗开启前的钩子
     * _afterEachCloseHooks 弹窗关闭前的钩子
     */
    // this._beforeEachOpenHooks = [];
    // this._afterEachCloseHooks = [];
  }
  // 打开指定弹窗
  push({ name = "", on = {}, props = {} } = {}) {
    const mid = _globalMid++;
    const route = this._getModal(name);
    if (!route) {
      throw new Error(
        `[vue-modal-router].push can not find modal "${name}",register first`
      );
    } else {
      this.innerPush({
        name,
        mid,
        component: route,
        on,
        props,
      });
    }
    console.log("current _runningRoutes", this._runningRoutes);
  }
  innerPush(options: ModalOption) {
    const route = {
      mid: options.mid,
      name: options.name,
      component: options.component,
      props: options.props,
      on: options.on,
    };
    this._runningRoutes.push(route);
  }
  // 关闭指定弹窗
  close(mid: number) {
    console.log('关闭指定弹窗', mid)
    let currentIndex = this._runningRoutes.findIndex(
      (component) => component.mid === mid
    );
    if (currentIndex) {
      this._runningRoutes.splice(currentIndex, 1);
    }
  }
  // 关闭弹窗调用栈中的所有弹窗
  closeAll() {
    this._runningRoutes = [];
  }
  // 获取指定的弹窗组件
  _getModal(name: string) {
    const pascalName = toPascalName(name);
    return this._routes[name] || this._routes[pascalName];
  }
};
export default {
  install: (app: any, option: Option) => {
    const modalRouter = new ModalRouter(option);
    const _runningRoutes = shallowReactive([]);
    modalRouter._runningRoutes = _runningRoutes;
    // 将运行中的弹窗组件执行栈提供至所有vue组件
    app.provide("_runningRoutes", _runningRoutes);
    // 将modalRouter提供至所有vue组件
    app.provide("$modalRouter", modalRouter);
    app.mixin({
      created() {
        // 找到弹窗组件
        if (this.$attrs && this.$attrs.ModalComponent) {
          const model = option.model;
          const ModalComponent = this.$attrs.ModalComponent;
          // 设置弹窗组件的显示属性为true
          this[model] = true;
          // 监听弹窗组件的显示属性，当其变化为false时，触发modalRouter的close方法，关闭弹窗
          this.$watch(model, (newVal) => {
            console.log(
              `ModalComponent ${ModalComponent.name} ${model} change, value is`,
              newVal
            );
            if (!newVal) {
              const mid = ModalComponent.mid;
              modalRouter.close(mid);
            }
          });
        }
      },
    });
    // 注册ModalRouterView组件
    app.component("ModalRouterView", ModalRouterView);
  },
};
