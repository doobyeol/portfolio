<script setup lang="ts">
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import PopupBg from "@/components/PopupBg.vue";

import { ref } from "vue";
// declare const window: any;

const isShowNav = ref(false);
function showMenu(isShow: boolean) {
  isShowNav.value = isShow;
}
</script>

<template>
  <Header :isShowNav="isShowNav" @showMenu="showMenu"></Header>
  <PopupBg v-show="isShowNav" @click="showMenu(false)"></PopupBg>
  <Nav :class="isShowNav ? 'show' : ''" @showMenu="showMenu"></Nav>
  <router-view />
</template>
