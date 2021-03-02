import useMousePosition from "@/hooks/useMousePosition";
import {defineComponent} from 'vue'
export default defineComponent({
  setup() {
    // setup只执行一次
    const { x, y } = useMousePosition();
    // other logic...
    return { x, y }
  },
  render() {
    return (
      <div>
        <div>{ this.x }</div>
        <div>{ this.y }</div>
      </div>
    );
  }
})