<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useAskStore } from "../store/ask";
import { storeToRefs } from "pinia";

const emit = defineEmits(["showPopup"]);
const askStore = useAskStore();
const { asks } = storeToRefs(askStore);

function sendAsk(askItem: Object) {
  askStore.registerAsk(askItem);
  emit("showPopup", false);
}
</script>

<template>
  <div class="popWrap">
    <ul>
      <li v-for="ask in asks" :key="ask.key" @click="sendAsk(ask)">
        {{ ask.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.popWrap {
  z-index: 2;
  position: absolute;
  width: 65%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popWrap li {
  background-color: #ffffffd4;
  /* border: 2px solid #79286b; */
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 1.16em;
  cursor: pointer;
}
</style>