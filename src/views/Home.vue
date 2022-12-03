<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Profile from "@/components/Profile.vue";
import Timeline from "@/components/Timeline.vue";
import Tab from "@/components/Tab.vue";

import { storeToRefs } from "pinia";
import { useTimelineStore } from "../store/timeline";

const timelineStore = useTimelineStore();
const { timelineList, activeTab } = storeToRefs(timelineStore);
</script>

<template>
  <div class="contentWrap">
    <Profile></Profile>
    <Tab></Tab>
    <Timeline v-for="item in timelineList" :key="item.date" :item="item" />
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