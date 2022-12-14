<script setup lang="ts">
import { ref } from "vue";
import { useBubbleStore } from "../store/bubble";

const bubbleStore = useBubbleStore();
const toThinkOfSomethings = ref<Array<string>>([
  'hello, world !', 
  '배고프다..', 
  '오늘 뭐먹지..', 
  '불을 끄고 나왔었나?..', 
  '누가 자꾸 건드는 느낌..', 
  '그만 눌러!..', 
  '사실 좋아..',
  '이곳에 와줘서 고마워',
  '오늘 하루 행운이 가득해',
  '좋은 일이 일어날거야',
  'no need be best',
  'only good and kind !',
]);

const countClickProfile = ref<number>(0);

function clickFollow() {
  bubbleStore.onEmoji('heart');
}

function clickProfile() {
  bubbleStore.onText(toThinkOfSomethings.value[countClickProfile.value]);
  countClickProfile.value++;
  if (toThinkOfSomethings.value.length == countClickProfile.value) {
    countClickProfile.value = 0
  }
}
</script>

<template>
  <div class="profileWrap">
    <div class="content">
      <div class="cover"></div>
      <div class="profile">
        <div class="pic"  @click="clickProfile"></div>
      </div>
      <div class="button">
        <a @click="clickFollow"></a>
      </div>
    </div>
    <ul class="txt">
      <li class="name">두별</li>
      <li>Web Developer</li>
      <li class="flex gray"><span class="pin"></span> Seoul</li>
      <li class="flex gray">
        <a href="mailto:doobyeol@gmail.com">
          <span class="mail"></span> doobyeol@gmail.com
        </a>
      </li>
      <li class="flex">
        <a
          href="https://velog.io/@doobyeol"
          target="_blink"
          class="velog icon"
          title="velog"
        ></a>
        <a
          href="https://github.com/doobyeol"
          target="_blink"
          class="github icon"
          title="github"
        ></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.profileWrap {
  padding-bottom: 20px;
}

.txt li .icon {
  width: 30px;
  height: 30px;
  display: block;
  background-size: cover;
  margin: 9px 9px 0 0;
}
.gray {
  color: rgb(91, 92, 101);
}

.github {
  background-image: url(/src/assets/img/content/github.png);
}

.velog {
  background-image: url(/src/assets/img/content/velog.png);
  border-radius: 3px;
}

.pin {
  width: 16px;
  height: 16px;
  margin: 4px 5px 0 0;
  background-size: cover;
  background-image: url(/src/assets/img/content/pin.png);
}

.mail {
  display: inline-block;
  width: 16px;
  height: 11px;
  background-size: cover;
  background-image: url(/src/assets/img/header/icon_03.png);
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
  cursor: pointer;
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
  padding: 64px 0 0;
  color: black;
}

.txt > li {
  font-size: 1.3em;
  line-height: 25px;
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