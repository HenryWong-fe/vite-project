interface State {
  _modalComponents: any[]
}
const state: State = {
  _modalComponents: [],
};
const getters = {
  _modalComponents: (state) => state._modalComponents,
};
const mutations = {}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
};