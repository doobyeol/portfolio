<script setup lang="ts">
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import PopupBg from "@/components/PopupBg.vue";
import AskPop from "@/components/AskPop.vue";

import { ref } from "vue";
// declare const window: any;

const isShowNav = ref(false);
const isShowPop = ref(false);
function showMenu(isShow: boolean) {
  isShowNav.value = isShow;
}
function showPopup(isShow: boolean) {
  isShowPop.value = isShow;
}
</script>

<template>
  <Header :isShowNav="isShowNav" @showMenu="showMenu" />
  <AskPop v-show="isShowPop" @showPopup="showPopup" />
  <PopupBg
    v-show="isShowNav || isShowPop"
    @click="showMenu(false), showPopup(false)"
  />
  <Nav :class="isShowNav ? 'show' : ''" @showMenu="showMenu" />
  <router-view @showPopup="showPopup" />
</template>
