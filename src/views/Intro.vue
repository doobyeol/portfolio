<script setup lang="ts">
import router from "@/router";
import { ref, onBeforeMount } from "vue";
const isStop = ref(false);
const isClickStop = ref(false);

onBeforeMount(() => {});

const intervalStopButton = setInterval(() => {
  isStop.value = !isStop.value;
}, 250);

const clickStopButton = () => {
  isClickStop.value = true;
  isStop.value = true;
  clearInterval(intervalStopButton);
  setTimeout(() => {
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