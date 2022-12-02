<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import router from "@/router";
import { useAskStore } from "../store/ask";
import { storeToRefs } from "pinia";

const emit = defineEmits(["showMenu"]);
const props = defineProps<{ isShowNav: boolean }>();

const askStore = useAskStore();
const { isWatchedHello } = storeToRefs(askStore);

function showMenu() {
  emit("showMenu", !props.isShowNav);
}

onBeforeMount(() => {
  console.log("####### onBeforeMount");
  const isWatchedHelloLocal = localStorage.getItem("isWatchedHello");
  if (isWatchedHelloLocal == "true") {
    askStore.watchedHello();
  }
});
</script>

<template>
  <div class="hdrWrap">
    <header>
      <ul>
        <li class="menu">
          <div class="icon" @click="showMenu"></div>
        </li>
        <li class="home">
          <div class="icon" @click="router.push('/')"></div>
        </li>
        <li class="mail">
          <div
            class="icon"
            :class="isWatchedHello ? '' : 'badge'"
            @click="router.push('/about')"
          ></div>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.mail .icon.badge::before {
  content: "1";
  display: block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  color: #fff;
  font-size: 0.6em;
  font-weight: bold;
  border-radius: 10px;
  background-color: #db0029;
  position: absolute;
  top: -6px;
  right: -8px;
  font-family: "모리스9";
}
</style>