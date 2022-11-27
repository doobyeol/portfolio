<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
declare const window: any;

function addBookmark(e: Event) {}
</script>

<template>
  <div class="content">
    <div class="cover"></div>
    <div class="profile">
      <div class="pic"></div>
    </div>
    <div class="button">
      <a href="https://github.com/doobyeol" target="_blink"></a>
    </div>
  </div>
  <ul class="txt">
    <li class="name">두별</li>
    <li>Doobyeol Kim</li>
    <li>Web Developer</li>
    <li>doobyeol@gmail.com</li>
  </ul>
</template>