<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const emit = defineEmits(["showMenu"]);
const props = defineProps<{ showNav: boolean }>()

function showMenu() {
  console.log('showMenu');
  emit('showMenu', !props.showNav);
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
          <a href=""><div class="icon"></div></a>
        </li>
        <li class="mail">
          <a href="mail.html"><div class="icon"></div></a>
        </li>
      </ul>
    </header>
  </div>
</template>