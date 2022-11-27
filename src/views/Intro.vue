<script setup lang="ts">
import router from "@/router";
import { ref, onBeforeMount, onUnmounted } from "vue";
const isStop = ref(false);
const isClickStop = ref(false);

onBeforeMount(() => {
  console.log("####### onBeforeMount");
});

onUnmounted(() => {
  console.log("#################### onUnmounted");
  clearInterval(intervalStopButton);
  clearTimeout(stopTimeout.value);
});

const stopTimeout = ref();

const intervalStopButton = setInterval(() => {
  console.log("####### intervalStopButton setInterval");

  isStop.value = !isStop.value;
}, 250);

const clickStopButton = () => {
  console.log("####### clickStopButton");
  isClickStop.value = true;
  isStop.value = true;
  console.log("####### clearInterval");
  clearInterval(intervalStopButton);

  stopTimeout.value = setTimeout(() => {
    console.log("####### setTimeout");
    router.push("/");
  }, 6000);
};
</script>

<template>
  <div class="introWrap">
    <div class="ilustWrap">
      <div class="illust">
        <div>
          <div class="play" :class="isClickStop ? 'stop' : ''"></div>
        </div>
      </div>
    </div>
    <div class="buttonWrap">
      <div v-show="!isStop" class="txt">Click!</div>
      <div
        class="btn"
        :class="isClickStop ? 'stop' : ''"
        @click="clickStopButton"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.introWrap {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(/src/assets/img/intro/images/bgi_01.png) center center fixed;
}

.introWrap .ilustWrap {
  width: 100%;
  height: 100%;
  position: absolute;
}

.introWrap .illust {
  width: 100%;
  height: 100%;
  background-position: center;
  background: url(/src/assets/img/intro/images/illust_03.png) no-repeat center
    center fixed;
  background-size: contain;
  overflow: hidden;
}

.introWrap .illust > div {
  position: absolute;
  width: 500px;
  height: 300px;
  margin: auto;
  top: -14vh;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
}

.introWrap .play {
  width: 100%;
  height: 100%;
  background-position: center;
  background: url(/src/assets/img/intro/images/play.gif) no-repeat center center
    fixed;
  overflow: hidden;
}

.introWrap .play.stop {
  background: url(/src/assets/img/intro/images/stop.gif) no-repeat center center
    fixed;
}

.introWrap .play > img {
  object-fit: contain;
}

.buttonWrap {
  width: 100%;
  height: 100%;
  position: absolute;
}

.txt {
  width: 83%;
  margin: 0 auto;
  padding: 60px 0 0;
  color: black;
}

.introWrap .txt {
  cursor: pointer;
  z-index: 1;
  position: absolute;
  width: 100px;
  height: 40px;
  color: white;
  margin: auto;
  bottom: 245px;
  left: 0;
  right: 0;
  font-size: 18px;
  text-align: center;
}

.introWrap .btn {
  position: absolute;
  background-image: url("/src/assets/img/intro/images/btn_03.png");
  width: 108px;
  height: 93px;
  background-position: center;
  background-size: cover;
  margin: auto;
  bottom: 170px;
  left: 0;
  right: 0;
  cursor: pointer;
}

.introWrap .btn.stop {
  background-image: url("/src/assets/img/intro/images/btn2_03.png");
  width: 108px;
  height: 70px;
}

.introWrap .btnA {
  display: none;
  position: absolute;
  background-image: url("/src/assets/img/intro/images/btn2_03.png");
  width: 108px;
  height: 72px;
  background-position: center;
  background-size: cover;
  margin: auto;
  bottom: 170px;
  left: 0;
  right: 0;
  cursor: pointer;
}

@media (max-width: 900px) {
  .introWrap .illust > div {
    width: 58%;
    height: 25%;
  }
}

@media (max-width: 620px) {
  .introWrap .illust > div {
    height: 23%;
  }
}

@media (max-width: 580px) {
  .introWrap .illust > div {
    height: 14%;
    top: -13vh;
  }

  .introWrap .play,
  .introWrap .play.stop {
    background-size: contain;
  }
}

@media (max-width: 340px) {
  .introWrap .illust > div {
    height: 12%;
    top: -13vh;
    width: 60%;
    margin-left: 20%;
  }
}

@media (max-width: 280px) {
  .introWrap .illust > div {
    height: 18%;
    top: -3vh;
  }
}
</style>