import { cloneDeep } from "lodash-es";
import { walkTree } from "@/utils/walk-tree";
import regionTreeJson from "@/assets/json/region.json";

const state = {
  // 全量省、市、地区数据tree
  regionTree: regionTreeJson.list
};
const mutations = {};
const actions = {};
const getters = {
  regionTree: (state) => state.regionTree,
  // 只到第二级的城市数据tree
  cityTree: (state) => {
    const _cityTree = cloneDeep(state.regionTree);
    walkTree(_cityTree, (node) => {
      if (node.level === 2) {
        delete node.children;
      }
    });
    return _cityTree;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
