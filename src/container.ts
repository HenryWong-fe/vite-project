/**
 * 全局容器 用于存放store,router 等对象
 */
export default {
  _data: {
    store: null,
    router: null,
    layouts: {},
  },
  set(key, value) {
    this._data[key] = value;
    return this;
  },
  get(key) {
    const v = this._data[key];
    if (v === undefined) {
      console.error(`[container] can not find ${key} in container`);
    }
    return v;
  },
};
