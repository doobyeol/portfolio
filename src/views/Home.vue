<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Profile from "@/components/Profile.vue";
import Timeline from "@/components/Timeline.vue";
</script>

<template>
  <div class="contentWrap">
    <Profile></Profile>
    <Timeline></Timeline>
  </div>
</template>

<style>
.container {
  height: 100vh;
}
.flex {
  display: flex;
}

.contentWrap {
  overflow-y: scroll;
  height: calc(100vh - 53px);
  padding-bottom: 40px;
}
</style>