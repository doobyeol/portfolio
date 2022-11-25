<script setup lang="ts">
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import { ref, watch } from 'vue'

const showNav = ref(false);

function showMenu(isShow: boolean) {
  console.log('isShow: ', isShow);
  console.log('showMenu: ', showMenu);
  
  showNav.value = isShow;
}

watch(showNav, () => {
  console.log();
});
</script>

<template>
  <Header @showMenu="showMenu" :showNav="showNav"></Header>
  <Nav v-show="showNav"></Nav>
  <router-view  @click="showMenu(false)"/>
</template>
