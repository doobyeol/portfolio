<script setup lang="ts">
import { ref } from "vue";

interface routeLink {
  name: string;
  to: string;
}

const routeLinkArr = ref<Array<routeLink>>([
  { name: "INTRO", to: "/intro" },
  { name: "HOME", to: "/" },
  { name: "ABOUT ME", to: "/about" },
  { name: "PORTFOLIO", to: "/portfolio" },
  { name: "CONTACK", to: "/contack" },
]);

const emit = defineEmits(["showMenu"]);
</script>

<template>
  <div class="navWrap">
    <ul class="nav">
      <li
        v-for="route in routeLinkArr"
        :key="route.name"
        @click="emit('showMenu', false)"
      >
        <router-link :to="route.to">{{ route.name }}</router-link>
      </li>
    </ul>

    <div class="ftr">
      <ul>
        <li>ⓒ2022 Doobyeol All Rights & Copyright Reserved.</li>
      </ul>
    </div>
  </div>
</template>