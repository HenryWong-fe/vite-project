import { createStore } from "vuex";
import moduleRegion from './modules/region'
import moduleTab from "./modules/tab";
import moduleModalRouter from "./modules/modalRouter";
// Create a new store instance.
export default createStore({
  modules: {
    moduleRegion,
    moduleTab,
    moduleModalRouter,
  },
});
