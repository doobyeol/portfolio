<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
declare const window: any;

function addBookmark(e: Event) {}
</script>

<template>
  <div class="content">
    <div class="cover"></div>
    <div class="profile">
      <div class="pic"></div>
    </div>
    <div class="button">
      <a href="https://github.com/doobyeol" target="_blink"></a>
    </div>
  </div>
  <ul class="txt">
    <li class="name">두별</li>
    <li>Web Developer</li>
    <li>doobyeol@gmail.com</li>
  </ul>
</template>

<style scoped>
.container {
  height: 100vh;
}

.content {
  position: relative;
  width: 100%;
}

.content > .cover {
  background-image: url(/src/assets/img/content/cover_13.png);
  width: 100%;
  height: 170px;
  background-size: contain;
  background-position: center;
}

.content > .profile {
  position: absolute;
  top: 65%;
  left: 7%;
}

.content > .profile > .pic {
  background-image: url("/src/assets/img/content/pic_15.png");
  width: 115px;
  height: 115px;
  background-position: center;
  background-size: cover;
}

.content > .button {
  background-image: url(/src/assets/img/content/button_20.png);
  width: 147px;
  height: 27px;
  background-position: center;
  background-size: cover;
  float: right;
  margin-right: 6%;
  margin-top: 11px;
  cursor: pointer;
}

.content > .button > a {
  height: 100%;
  display: block;
}

.txt {
  width: 83%;
  margin: 0 auto;
  padding: 60px 0 0;
  color: black;
}

.txt > li {
  font-size: 1.3em;
  line-height: 21px;
}

.txt > .name {
  font-size: 1.3em;
  line-height: 40px;
}

@media (max-width: 920px) {
  .content > .cover {
    background-size: cover;
  }
}
</style>