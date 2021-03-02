import { ref, onMounted, onUnmounted } from "vue";
function useMousePosition() {
  const x = ref<Number>(0);
  const y = ref<Number>(0);
  const updateMouse = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    console.log("useMousePosition onMounted");
    document.addEventListener("mousemove", updateMouse);
  });

  onUnmounted(() => {
    console.log("useMousePosition onUnmounted");
    document.removeEventListener("mousemove", updateMouse);
  });
  return { x, y };
}
export default useMousePosition;
