import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";


export const useIntroStore = defineStore('introStore', () => {
  const isShowHeader = ref({});
  // const isWatchedIntro = ref(false);

  const showHeader = () => {
    isShowHeader.value = true;
  }
  const hideHeader = () => {
    isShowHeader.value = false;
  }

  const watchedIntro = () => {
    // isWatchedIntro.value = true;
    localStorage.setItem("isWatchedIntro", 'true');
  }
  const isWatchedIntro = () => {
    const isWatchedIntro = localStorage.getItem("isWatchedIntro");
    if (isWatchedIntro == 'true') {
      return true;
    }
  }


  return {
    isShowHeader,
    showHeader,
    hideHeader,
    isWatchedIntro,
    watchedIntro
  }
})