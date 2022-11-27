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