<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Profile from "@/components/Profile.vue";
import Bubble from "@/components/Bubble.vue";
import Timeline from "@/components/Timeline.vue";
import Tab from "@/components/Tab.vue";
import PixArticle from "@/components/PixArticle.vue";

import { storeToRefs } from "pinia";
import { useTimelineStore } from "../store/timeline";

const timelineStore = useTimelineStore();
const { timelineList, fixedArticle } = storeToRefs(timelineStore);

onBeforeMount(() => {
  timelineStore.getPostList();
});
</script>

<template>
  <div class="contentWrap">
    <Profile />
    <Bubble />
    <Tab />
    <PixArticle v-for="item in fixedArticle" :key="item.title" :item="item"/>
    <Timeline v-for="item in timelineList" :key="item.title" :item="item"/>
  </div>
</template>