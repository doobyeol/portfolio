import { defineStore } from 'pinia'
import { ref, onBeforeMount, reactive, computed } from "vue";

export const useTimelineStore = defineStore('timelineStore', () => {

    const timelineList = ref([
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
        { data: "2212011024", text: "Test !", imgPath: "" },
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
        moveTab
    }
})