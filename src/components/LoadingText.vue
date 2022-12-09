<script setup lang="ts">
import { ref, watch } from "vue";

const loadingText = ref<string>('');

const props = defineProps<{
  showLoadingText: boolean;
}>();

watch(props, () => {
  if (props.showLoadingText) {
    playLoadingText();
  }
});

async function playLoadingText() {
  while (props.showLoadingText) {
    
    loadingText.value += ' . ';
    if (loadingText.value.trim().length > 12) {
      loadingText.value = ' . ';
    }

    await sleep(300);
  }
}

function sleep(ms:number) {
  return new Promise((r) => setTimeout(r, ms));
}

</script>

<template>
  <div class="chat_text loading_text">
    <p class="loading_dot">{{ loadingText }}</p>
    <p class="loading_info">입력중</p>
  </div>
</template>

<style scoped>

.loading_text p.loading_dot{
  min-width: 57px;
  height: 38px;
  text-align: center;
}
.loading_text p.loading_info{
  margin: 2px 0 13px 7px;
  font-size: 0.8em;
  font-family: unset;
  color: #a3a3a4;
}

.content .chat_wrap .chat_body .chat_text {
  display: unset !important;
}

.content .chat_wrap .txt_box .chat_text p.loading_dot {
  width: max-content;
  max-width: 75%;
  background-color: #e5e5e6;
  padding: 10px;
  margin: 5px 0 0 5px;
  border-radius: 6px;
}
</style>