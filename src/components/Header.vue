<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const emit = defineEmits(["showMenu"]);
const props = defineProps<{ isShowNav: boolean }>();

function showMenu() {
  console.log("showMenu");
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
          <div class="icon"></div>
        </li>
        <li class="mail">
          <div class="icon"></div>
        </li>
      </ul>
    </header>
  </div>
</template>