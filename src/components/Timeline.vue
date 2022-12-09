<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTimelineStore, ArticleType } from "../store/timeline";

const timelineStore = useTimelineStore();
const { activeTab } = storeToRefs(timelineStore);

defineProps<{
  item: ArticleType;
}>();
</script>

<template>
  <div class="timelineWrap" v-if="item.type == activeTab">
    <div class="content">
      <div class="profile">
        <div class="img" />
        <p class="name">두별</p>
      </div>
      <div class="column">
        <p>
          {{ item.text }}
          <a v-if="item.link" target="_blink" :href="item.link">
            {{ item.link }}
          </a>
        </p>
        <div v-if="item.imgPath" class="img">
          <a target="_blink" :href="item.link ? item.link : '/'">
            <img :src="item.imgPath" width="100%" height="100%" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timelineWrap {
  width: 100%;
  /* margin-top: 40px; */
  font-family: "";
}

.timelineWrap:last-child {
  margin-bottom: 40px;
}

.timelineWrap .content {
  width: 83%;
  max-width: 800px;
  margin: 40px auto 0;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 20px;
}

.timelineWrap .profile {
  display: flex;
}
.timelineWrap .profile .name {
  line-height: 35px;
  padding-left: 10px;
}
.timelineWrap .profile .img {
  width: 35px;
  height: 35px;
  border: 1px solid rgba(204, 204, 204, 0.734);
  border-radius: 20px;
  background-image: url(/src/assets/img/content/pic_15.png);
  background-position: center;
  background-size: cover;
}

.timelineWrap .column {
  margin-top: 10px;
}

.timelineWrap .column a {
  color: #a67db6;
}
.timelineWrap .column .img {
  width: 100%;
  height: 150px;
  background-size: cover;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
}

.timelineWrap .column .img img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>