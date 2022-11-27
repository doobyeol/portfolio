<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import router from "@/router";

const emit = defineEmits(["showMenu"]);
const props = defineProps<{ isShowNav: boolean }>();

function showMenu() {
  emit("showMenu", !props.isShowNav);
}
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
          <div class="icon" @click="router.push('/about')"></div>
        </li>
      </ul>
    </header>
  </div>
</template>