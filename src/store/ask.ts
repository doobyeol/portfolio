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

  const askItem = ref(<any>{});

  const asks = ref([
    { key: 1, class: 'right', text: "MBIT가 뭔가요?" },
    { key: 2, class: 'right', text: "개발자가 된 계기가 있나요?" },
    { key: 3, class: 'right', text: "꿈이 뭔가요?" },
    { key: 4, class: 'right', text: "무인도에 딱 한가지 음식만 가져갈 수 있다면?" },
    { key: 5, class: 'right', text: "가장 좋아하는 영화가 뭔가요?" },
    { key: 6, class: 'right', text: "취미가 뭔가요?" },
    { key: 7, class: 'right', text: "살면서 가장 많이 들은 말은 뭔가요?" },
    { key: 8, class: 'right', text: "본인을 어필할만한 점이 있나요?" },
    { key: 9, class: 'right', text: "왜 디자인을 하다가 개발자로 전향한거예요?" },
  ]);

  const answers = ref([
    {
      key: 1, class: 'left',
      text: `
        INFJ 입니다! 가끔씩 E로 나올때도 있어요. 😄
      `
    },
    {
      key: 2, class: 'left',
      text: `
        처음 직무는 디자인과 퍼블리싱을 하는 디블리셔였는데
        제이쿼리로 동적인 화면을 구현하는게 재미있어서 혼자 이것 저것 만들어보다
        점점 개발에 관심도 생기고 야간학원도 다녀보고 하면서
        개발자의 꿈을 키워갔던 것 같아요! ☺
      `
    },
    {
      key: 3, class: 'left',
      text: `
        꿈 너무 많은데.. 직접 쓴 책도 출간하고 싶고.. 연봉 1억도 찍어보고 싶고.. 운동하고 밥잘먹고 건강했으면 좋겠고..
        직접 프로포즈도 해보고 싶고.. 집에 커다란 오븐이 있으면 좋겠고.. 하이틴에 나오는 프롬파티도 가보고 싶고..
        보름이가 건강하게 오래 살았으면 좋겠고.. 그리고 또 ..
        부끄러우니 자세한건 만나서 이야기 해요.. 🤭
      `
    },
    {
      key: 4, class: 'left',
      text: `
        지구젤리요!🌎 진짜 맛있는데 드셔보셨나요?!
      `
    },
    {
      key: 5, class: 'left',
      text: `
        월터의 상상은 현실이 된다! 🏃🏻‍♂️ 영상미가 정말 좋아요. https://youtu.be/b91eY8P46-A 
      `
    },
    {
      key: 6, class: 'left',
      text: `
        날 좋으면 자전거 타고 한강가기, 주말엔 카페가서 코딩하기, 행복한 날엔 일기쓰기, 스트레스 쌓일 땐 하이틴 영화보거나 게임하기! 😆
      `
    },
    {
      key: 7, class: 'left',
      text: `
        언니 이름은 한별이냐는 말 많이 듣는데 하도 많이 들어서 이제는 세별이도 있고 네별이도 있다고 받아쳐요. 😁
      `
    },
    {
      key: 8, class: 'left',
      text: `
        앗 이건 만나서 이야기 해드리고 싶어요! 🤭
      `
    },
    {
      key: 9, class: 'left',
      text: `
        앗 이건 만나서 이야기 해드리고 싶어요! 🤭
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
        setTimeout(()=> {
          chatItems.value.push(answer);
          askItem.value = answer;
        }, 2500);
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