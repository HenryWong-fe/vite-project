import { shallowMount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {
  test("renders a todo", () => {
    const wrapper = shallowMount(TodoApp);
    const todo = wrapper.get('[data-test="todo"]');
    expect(todo.text()).toBe("Learn Vue.js 3");
  });
});
