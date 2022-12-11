<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTimelineStore, ArticleType } from "../store/timeline";
import Badge from "@/components/Badge.vue";
const timelineStore = useTimelineStore();

const { fixedArticle } = storeToRefs(timelineStore);

const skillsBadge = ref<Array<any>>([
  {value: 'Java', color: '#5283a2'},
  {value: 'Spring', color: '#62a458', logo: 'https://simpleicons.org/icons/spring.svg'},
  {value: 'Oracle', color: '#ae2525', logo: 'https://simpleicons.org/icons/oracle.svg'},
  {value: 'PostgreSQL', color: '#526e8e', logo: 'https://simpleicons.org/icons/postgresql.svg'},
  {value: 'Node.js', color: '#759c60', logo: 'https://simpleicons.org/icons/nodedotjs.svg'},
  {value: 'Vue.js', color: '#11b48a', logo: 'https://simpleicons.org/icons/vuedotjs.svg'},
  {value: 'JavaScript', color: '#f5b33c', logo: 'https://simpleicons.org/icons/javascript.svg'},
  {value: 'TypeScript', color: '#1c63b3', logo: 'https://simpleicons.org/icons/typescript.svg'},
  {value: 'SCSS', color: '#c9469d', logo: 'https://simpleicons.org/icons/sass.svg'},
  {value: 'Git', color: '#3e3e4a', logo: 'https://simpleicons.org/icons/git.svg'},
  {value: 'Docker', color: '#0090db', logo: 'https://simpleicons.org/icons/docker.svg'},
]);

</script>

<template>
  <div class="timelineWrap" v-if="fixedArticle">
    <div class="content">
      <div class="profile">
        <!-- <div class="img" />
        <p class="name">두별</p> -->
        <b> {{ fixedArticle.title }} </b>
      </div>
      <div class="column">
        <p class="preLine">
          <!-- <b> {{ fixedArticle.title }} </b> -->
          <Badge :items="skillsBadge" />
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

.bedge {
  display: flex;
  flex-wrap: wrap;
}

.bedge li {
    width: fit-content;
    border-radius: 7px;
    color: #fff;
    background: rgb(108, 115, 115);
    margin: 8px 9px 0 0;
    padding: 4px 10px 7px 10px;
    vertical-align: middle;
}

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

.timelineWrap .profile b{
  padding-left: 27px;
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
  top: 0px;
  left: -4px;
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