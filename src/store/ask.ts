import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";

export interface Item {
  key: number
  class: string
  text: string
}


export const useAskStore = defineStore('askStore', () => {
  const askItem = ref({});
  const asks = ref([
    { key: 0, class: 'right', text: "안녕하세요!" },
    { key: 1, class: 'right', text: "취미가 뭔가요?" },
    { key: 2, class: 'right', text: "개발자가 된 이유는 뭔가요?" },
    { key: 3, class: 'right', text: "꿈이 뭔가요?" },
    { key: 4, class: 'right', text: "잘했다고 생각하는 프로젝트에 대해 알려 주세요!" },
  ]);

  const answers = ref([
    { key: 0, class: 'left', text: "이렇게 귀한곳에 귀한분이..! 반갑습니다!" },
    { key: 1, class: 'left', text: "저는 주말마다 카페가서 코딩하는 걸 좋아해요!" },
    { key: 2, class: 'left', text: "재밌어서요!" },
    { key: 3, class: 'left', text: "풀스택 개발자가 되는 것입니다." },
    { key: 4, class: 'left', text: "잘했다고 생각하는 프로젝트는 ..." },
  ]);

  const chatItems = ref<Array<Item>>([]);

  const initAsks = () => {
    askItem.value = {};
    chatItems.value = [];
  }

  const registerAsk = (item: Item) => {
    askItem.value = item;
    chatItems.value.push(item);

    answers.value.forEach((answer: Item) => {
      if (answer.key == item.key) {
        chatItems.value.push(answer);
      }
    })

    removeAsk(item);
    removeAnswer(item);
  }

  const removeAsk = (item: Item) => {
    asks.value = asks.value.filter((ask) => ask.key != item.key);
  }

  const removeAnswer = (item: Item) => {
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