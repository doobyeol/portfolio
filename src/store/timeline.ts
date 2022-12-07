import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";

export interface ArticleType {
  date: string | undefined
  type: string | undefined
  text: string | undefined
  link: string | undefined
  imgPath: string | undefined
}

export const useTimelineStore = defineStore('timelineStore', () => {

    const fixedArticle = ref(
        {
            date: "2212011204",
            type: "fix",
            text: `
                Front : JavaScript, TypeScript, JQuery, Vue, CSS\n
                Back : Java, SpringBoot, SpringSecurity, OAuth, JPA, Node.js, SQL, Git\n
            `,
            link: "",
            imgPath: "",
        },
    );

    const timelineList = ref<Array<ArticleType>>([
        {
            date: "2212011023",
            type: "career",
            text: "career test !",
            link: "",
            imgPath: "",
        },
        {
            date: "2212011023",
            type: "blog",
            text: "입사 1주년 회고록을 써봤어요!",
            link: "https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고",
            imgPath: "/img/timeline/221130.png",
        },
        { date: "2212011024", text: "Test !", imgPath: "",link: "", type:""},
        {
            date: "2212011023",
            type: "project",
            text: "프로젝트!",
            link: "",
            imgPath: "",
        },
    ]);

    const activeTab = ref('career');
    const moveTab = (typeNm: string) => {
        activeTab.value = typeNm;
    }

    return {
        timelineList,
        activeTab,
        moveTab,
        fixedArticle
    }
})