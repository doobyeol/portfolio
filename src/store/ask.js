import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";

export const useAskStore = defineStore('askStore', () => {
  const askItem = ref();
  const asks = ref([
    { key: 0, class: 'right', text: "안녕하세요!" },
    { key: 1, class: 'right', text: "취미가 뭔가요?" },
    { key: 2, class: 'right', text: "희망연봉은 얼마인가요?" },
    { key: 3, class: 'right', text: "꿈이 뭔가요?" },
    { key: 4, class: 'right', text: "잘했다고 생각하는 프로젝트에 대해 알려 주세요!" },
  ]);

  const answers = ref([
    { key: 0, class: 'left', text: "이렇게 귀한곳에 귀한분이..! 반갑습니다!" },
    { key: 1, class: 'left', text: "주말에 분조카 가서 카공하는걸 좋아합니다 ㅎㅎ" },
    { key: 2, class: 'left', text: "회사 내규에 따르겠습니다..!" },
    { key: 3, class: 'left', text: "서른전에 풀스택 개발자가 되는 것입니다." },
    { key: 4, class: 'left', text: "현재 진행중인 프로젝트는 ..." },
  ]);

  const chatItems = ref([]);

  const initAsks = () => {
    askItem.value = {};
    chatItems.value = [];
  }

  const registerAsk = (item) => {
    askItem.value = item;
    chatItems.value.push(item);

    answers.value.forEach((answer) => {
      if (answer.key == item.key) {
        chatItems.value.push(answer);
      }
    })

    removeAsk(item);
    removeAnswer(item);
  }

  const removeAsk = (item) => {
    asks.value = asks.value.filter((ask) => ask.key != item.key);
  }

  const removeAnswer = (item) => {
    answers.value = answers.value.filter((answer) => answer.key != item.key);
  }


  return {
    asks,
    answers,
    askItem,
    chatItems,
    initAsks,
    registerAsk,
  }
})