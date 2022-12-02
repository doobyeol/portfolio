<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Profile from "@/components/Profile.vue";
import Timeline from "@/components/Timeline.vue";

const timelineList = ref([
  {
    date: "2212011023",
    text: "입사 1주년 회고록을 써봤어요!",
    link: "https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고",
    imgPath: "/img/timeline/221130.png",
  },
  { data: "2212011024", text: "Test !", imgPath: "" },
]);
</script>



<template>
  <div class="contentWrap">
    <Profile></Profile>
    <Timeline
      v-for="item in timelineList"
      :key="item.date"
      :text="item.text"
      :link="item.link"
      :imgPath="item.imgPath"
    />
  </div>
</template>

<style>
.container {
  height: 100vh;
}
.flex {
  display: flex;
}
.contentWrap {
  overflow-y: scroll;
  height: calc(100vh - 53px);
  padding-bottom: 40px;
}
</style>