<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useTimelineStore } from "../store/timeline";

const timelineStore = useTimelineStore();
const { activeTab } = storeToRefs(timelineStore);

interface tabType {
  class: string;
  text: string;
  type: string;
}

onBeforeMount(() => {
  activeSetClass();
});

const tabs = ref([
  { class: "active", text: "소개", type: "introduction" },
  { class: "", text: "경력", type: "career" },
  { class: "", text: "프로젝트", type: "project" },
  { class: "", text: "블로그", type: "blog" },
]);

function onTab(tab: tabType) {
  timelineStore.moveTab(tab.type);
  activeSetClass();
}

function activeSetClass() {
  tabs.value = tabs.value.filter((tabItem) => {
    if (tabItem.type == activeTab.value) {
      tabItem.class = "active";
    } else {
      tabItem.class = "";
    }
    return tabItem;
  });
}
</script>

<template>
  <div class="tabWrap">
    <ul class="">
      <li v-for="tab in tabs" :key="tab.type" @click="onTab(tab)">
        <p :class="tab.class">{{ tab.text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tabWrap {
  height: 40px;
  border-top: 1px solid #eeeeef;
  border-bottom: 1px solid #eeeeef;
  box-shadow: 0 8px 12px -6px rgb(150 151 158 / 15%);
}

.tabWrap ul {
  display: flex;
  width: 83%;
  margin: 0 auto;
  line-height: 40px;
}

.tabWrap li {
  width: 80px;
  text-align: center;
}

.tabWrap li p {
  position: relative;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  cursor: pointer;
}

.tabWrap li p.active::after {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  content: "";
  height: 3px;
  background-color: #bc849c;
}
</style>