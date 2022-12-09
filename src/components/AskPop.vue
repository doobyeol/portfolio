<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useAskStore, Item } from "../store/ask";
import { storeToRefs } from "pinia";

const emit = defineEmits(["showPopup"]);
const askStore = useAskStore();
const { asks } = storeToRefs(askStore);

function sendAsk(askItem: Item) {
  askStore.registerAsk(askItem);
  emit("showPopup", false);
}
</script>

<template>
  <div class="popWrap">
    <ul v-if="(asks.length > 0)">
      <li v-for="ask in asks.slice(0, 5)" :key="ask.key" @click="sendAsk(ask)">
        {{ ask.text }}
      </li>
    </ul>
    <ul v-else>
      <li class="sendMail">
        <a href="mailto:doobyeol@gmail.com">만나서 더 대화해볼까? </a>
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

.popWrap li.sendMail{
  padding: 0;
}
.popWrap li.sendMail a{
  display: inline-block;
  width: 100%;
  padding: 20px;
}

</style>