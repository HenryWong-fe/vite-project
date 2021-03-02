<template>
  <Modal v-model:visible="show"> 123 </Modal>
</template>
<script>
import Modal from "@/components/Modal.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "a-a",
  components: { Modal },
  data() {
    return {
      show: false,
    };
  },
});
</script>
