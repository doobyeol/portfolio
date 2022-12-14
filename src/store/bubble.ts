import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";


export const useBubbleStore = defineStore('bubbleStore', () => {
  const isShowBubble = ref<boolean>(false);
  const isEmoji = ref<string | null>(null);
  const isText = ref<string | null>(null);
  const bubbleTimeout = ref();
  const emojiAndTextTimeout = ref();

  const showBubble = () => {
    isShowBubble.value = true;

    bubbleTimeout.value = setTimeout(() => {
      isShowBubble.value = false;
    }, 1500);
  }

  const clearBubbleAll= () => {
    clearTimeout(bubbleTimeout.value);
    clearTimeout(emojiAndTextTimeout.value);
  }

  const onEmoji = (className:string) => {
    clearBubbleAll();
    isEmoji.value = className;
    isText.value = null;
    showBubble();
  }
  const onText = (text:string) => {
    clearBubbleAll();
    isEmoji.value = null;
    isText.value = text;
    showBubble();
  }

  return {
    isShowBubble,
    showBubble,
    onEmoji,
    onText,
    isEmoji,
    isText,
    clearBubbleAll
  }
})