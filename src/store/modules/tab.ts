import { find, findIndex, last } from "lodash-es";
import container from "@/container";

const state = {
  // 全量省、市、地区数据tree
  tabs: [],
  collapsed: false,
};
const mutations = {
  ADD_TAB(state, toRoute) {
    console.log("ADD_TAB", toRoute, state);
    // 没有title 不执行
    if (!toRoute.meta.title) {
      return;
    }
    const tab = find(state.tabs, { name: toRoute.name });
    if (!tab) {
      state.tabs.push({
        name: toRoute.name,
        title: toRoute.meta.title,
        query: toRoute.query,
        params: toRoute.params,
        autoCloseTab: toRoute.meta.autoCloseTab,
      });
    } else {
      tab.query = toRoute.query;
      tab.params = toRoute.params;
    }
    state.tabs = state.tabs.filter((tab) => {
      // 去掉哪些需要自动关闭tab的标签
      if (tab.autoCloseTab && tab.name !== toRoute.name) {
        return false;
      }
      return true;
    });
  },
  CLOSE_TAB(state, routeName) {
    const router = container.get("router");
    const currentRoute = router.currentRoute;
    const tab = find(state.tabs, { name: routeName });
    if (!tab) {
      console.warn(`[CLOST_TAB] ${routeName} is not find`);
      return;
    }
    const tabIdx = findIndex(state.tabs, { name: routeName });
    const isCurrent = currentRoute.name === tab.name;

    if (state.tabs.length > 1) {
      state.tabs.splice(tabIdx, 1);
      // 关闭的标签为当前路由时 跳到最后一个标签页
      if (isCurrent) {
        const lastTab = last(state.tabs);
        router.push(lastTab);
      }
    }
  },
  CHANGE_TAB(state, toRouteName) {
    const router = container.get("router");
    const currentRoute = router.currentRoute;
    const tab = find(state.tabs, { name: toRouteName });
    const isCurrent = currentRoute.name === tab.name;

    if (!isCurrent) {
      router.push(tab);
    }
  },
  SET_COLLAPSED(state, collapsed) {
    state.collapsed = collapsed;
  },
  CLOSE_ALL_TABS(state) {
    const router = container.get("router");
    state.tabs = [];
    router.push("/");
  },
  CLOSE_ALL_OTHER_TABS(state) {
    const router = container.get("router");
    const currentRoute = router.currentRoute;
    state.tabs = state.tabs.filter((tab) => tab.name === currentRoute.name);
  }
};
const actions = {};
const getters = {
  tabs: (state) => state.tabs,
  collapsed: (state) => state.collapsed,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
