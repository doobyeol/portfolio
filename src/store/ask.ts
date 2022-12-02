import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";

export interface Item {
  key: number
  class: string
  text: string
}

export const useAskStore = defineStore('askStore', () => {

  const isWatchedHello = ref(false);

  const watchedHello = () => {
    isWatchedHello.value = true;
    localStorage.setItem("isWatchedHello", 'true');
  }

  const askItem = ref({});

  const asks = ref([
    { key: 1, class: 'right', text: "두별님은 개발자가 된 이유가 뭔가요?" },
    { key: 2, class: 'right', text: "개발자가 된지 이제 1년이 넘으셨는데 어떤 점이 달라졌다고 느끼세요?" },
    { key: 3, class: 'right', text: "본인이 생각하는 단점은 무엇인가요?" },
    { key: 4, class: 'right', text: "꿈이 뭔가요?" },
    { key: 5, class: 'right', text: "잘했다고 생각하는 프로젝트에 대해 알려 주세요!" },
  ]);

  const answers = ref([
    {
      key: 1, class: 'left',
      text: `
        제가 이전에는 웹디자이너 였다는걸 이야기 했던가요? 
        ㅎㅎ 화면을 동적으로 만들어보고 싶어서 직접 자바스크립트도 
        짜보고 하다가 개발의 재미를 알아갔던 것 같아요! 
        직장 다니면서도 야간에는 개발학원 다니며 
        개발자의 꿈을 키워갔던 것 같네요. 
        온전히 재미있어서요!
      `
    },
    {
      key: 2, class: 'left',
      text: `
        음, 굉장히 많은데요. 첫번째는 내면적으로 성숙해지고 행복해졌다는거요! 
        개발자가 되고나서, 스스로의 미숙한 점을 인정하는 법을 알게 된 같아요.. ㅋㅋㅋ
        아직 서툴고 미숙한 부분이 많지만, 그런 점들도 어른의 모습인 것을 받아들인 지금은 
        온전히 평화롭고 제가 가진 모든 것이 너무 감사합니다. 
        그 외에도 말씀드리고 싶은게 많은데.. 만나서 이야기 나누면 좋겠네요! :)
      `
    },
    {
      key: 3, class: 'left',
      text: `
        부끄럽지만, 개발자가 된 초반의 저는 다소 소극적인 모습이였어요.
        '나만 잘 모르는 것 같은데 질문하면 창피하기도 하고.. 바보같아 보이면 어쩌지..' 
        이런 생각들이 저의 성장을 방해한다는걸 자각하고 잇었기 때문에,
        극복하기 위해 점차 질문도 많이 하고, 
        처음이라 어려운 업무들도 선뜻 나서서 해보겠다고 하고
        부족한 부분은 공부하면서 채울려고 노력했어요. 
        그만큼 도전해볼 수 있는 기회도 많이
        생겨서 자연스레 적극적인 모습으로 변할 수 있었던 것 같습니다!
     `
    },
    {
      key: 4, class: 'left',
      text: `
        취준생일 땐 다소 무대뽀로(ㅋㅋ) 서른 살 전에 풀스택 개발자가 되자! 했는데,
        개발자가 되어보니까.. 풀스택 개발자.. 그거 금방 쉽게 되는게 아니더라구요?
        개발은 참 공부해야할 것도 많고 도태되어서도 안되고 ~ 개발자의 숙명이라는게 있죠.
        그 길고 긴 관문을 포기하지 않고 통과했을 때, 제 꿈이 이뤄져 있을거라고 믿고 있어요.
        그래서 저는 조급해하지 않고 천천히 나아가보려고 합니다!
        서른살 까지는 무리~ (ㅋㅋ)
      `
    },
    {
      key: 5, class: 'left',
      text: `
        그게 또 할 이야기가 참 ~ 많은데 ! 자세한 이야기는 만나서 나누시면 어떨까요?
        제 이메일은 doobyeol@gmail.com이예요! 연락 기다리겠습니다 :D
      `
    },
  ]);

  const chatItems = ref<Array<Item>>([{ key: 0, class: 'left', text: "안녕하세요! :)" }]);

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
    watchedHello,
    isWatchedHello
  }
})