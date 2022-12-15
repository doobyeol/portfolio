<script setup lang="ts">
import router from "@/router";
import { ref, onBeforeMount, onUnmounted } from "vue";
import { useIntroStore } from "../store/intro";

const introStore = useIntroStore();

const isStop = ref(false);
const isClickStop = ref(false);

onBeforeMount(() => {
  introStore.watchedIntro();
  console.log(`
    %c
      ██████╗ ██╗ ██████╗██╗  ██╗    ███╗   ███╗███████╗    ██╗
      ██╔══██╗██║██╔════╝██║ ██╔╝    ████╗ ████║██╔════╝    ██║
      ██████╔╝██║██║     █████╔╝     ██╔████╔██║█████╗      ██║
      ██╔═══╝ ██║██║     ██╔═██╗     ██║╚██╔╝██║██╔══╝      ╚═╝
      ██║     ██║╚██████╗██║  ██╗    ██║ ╚═╝ ██║███████╗    ██╗
      ╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝    ╚═╝
                                                              
  `, 'color: pink');
});

onUnmounted(() => {
  clearInterval(intervalStopButton);
  clearTimeout(stopTimeout.value);
});

const stopTimeout = ref();

const intervalStopButton = setInterval(() => {
  isStop.value = !isStop.value;
}, 250);

const clickStopButton = () => {
  isClickStop.value = true;
  isStop.value = true;
  clearInterval(intervalStopButton);

  stopTimeout.value = setTimeout(() => {
    router.push("/");
  }, 6000);
};

const stopUrl = ref<string>('/img/intro/stop.gif');
const playUrl = ref<string>('/img/intro/play.gif');
const gifOption = ref<string>('no-repeat center / contain fixed');
</script>

<template>
  <div class="introWrap">
    <div class="ilustWrap">
      <div class="illust"></div>
      <div 
        class="play" 
        :class="isClickStop ? 'stop' : ''"
        :style="{ 
          background : isClickStop ? 
          `url(${stopUrl + '?' + Math.random()}) ${gifOption}` 
          : `url(${playUrl}) ${gifOption}` }"
      />
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
  z-index: 0;
  position: absolute;
  min-width: 290px;
}

.introWrap .play {
  width: 100%;
  height: 100%;
  /* background-position: center;
  background: url(/src/assets/img/intro/images/play.gif) no-repeat center center fixed;
  background-size: contain; */
  overflow: hidden;
  position: absolute;
}

/* .introWrap .play.stop {
  background: url(/src/assets/img/intro/images/stop.gif) no-repeat center center fixed;
  background-size: contain;
} */

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
</style>