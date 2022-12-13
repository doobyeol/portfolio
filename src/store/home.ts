import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";


export const useHomeStore = defineStore('homeStore', () => {
  const isShowBubble = ref<boolean>(false);

  const showBubble = () => {
    isShowBubble.value = true;

    setTimeout(() => {
      isShowBubble.value = false;
    }, 1500);
  }

  return {
    isShowBubble,
    showBubble
  }
})