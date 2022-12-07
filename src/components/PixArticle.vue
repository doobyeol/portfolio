<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTimelineStore, ArticleType } from "../store/timeline";

const timelineStore = useTimelineStore();

const { fixedArticle } = storeToRefs(timelineStore);

</script>

<template>
  <div class="timelineWrap" v-if="fixedArticle">
    <div class="content">
      <div class="profile">
        <div class="img" />
        <p class="name">두별</p>
      </div>
      <div class="column">
        <p class="preLine">
          {{ fixedArticle.text }}
          <a v-if="fixedArticle.link" target="_blink" :href="fixedArticle.link">
            {{ fixedArticle.link }}
          </a>
        </p>
        <div v-if="fixedArticle.imgPath" class="img">
          <a target="_blink" :href="fixedArticle.link ? fixedArticle.link : '/'">
            <img :src="fixedArticle.imgPath" width="100%" height="100%" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.preLine {
  white-space: pre-line;
  line-height: 14px;
}
.timelineWrap {
  width: 100%;
  margin-top: 40px;
  font-family: "";
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
  position: relative;
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

.timelineWrap .profile::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -4px;
  background-image: url(/src/assets/img/content/push_pin.png);
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