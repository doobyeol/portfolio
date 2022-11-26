<script setup lang="ts">
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import { ref, watch } from "vue";

const isShowNav = ref(false);

function showMenu(isShow: boolean) {
  console.log("isShow: ", isShow);
  console.log("showMenu: ");

  isShowNav.value = isShow;
}

watch(isShowNav, () => {
  console.log();
});
</script>

<template>
  <Header @showMenu="showMenu" :isShowNav="isShowNav"></Header>
  <Nav :class="isShowNav ? 'show' : ''"></Nav>
  <router-view @click="showMenu(false)" />
</template>
