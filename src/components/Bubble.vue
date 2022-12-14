<template>
  <div class="bubbleWrafp" :class="isShowBubble? '' : 'hide'">
    <p :class="isEmoji ? isEmoji : ''" >
      {{ isText ? isText : '' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBubbleStore } from "../store/bubble";

const bubbleStore = useBubbleStore();
const { isShowBubble, isEmoji, isText } = storeToRefs(bubbleStore);
</script>

<style scoped>
.bubbleWrafp {
  position: relative;
  width: 83%;
  margin: 0 auto;
  opacity: 100%;
  transition: 0.6s;
}

.bubbleWrafp.hide {
  opacity: 0%;
}

.bubbleWrafp p{
  position: absolute;
  top: -341px;
  width: 174px;
  left: 109px;
  height: 65px;
  background-image: url(/src/assets/img/easteregg/bubble.png);
  background-repeat: no-repeat;
  text-align: center;
  padding-left: 24px;
  line-height: 49px;
}
p.heart {
  width: 95px;
  background-image: url(/src/assets/img/easteregg/mini_bubble.png);
}
p.heart::before {
  display: inline-block;
  content: '';
  width: 27px;
  margin-top: 10px;
  height: 26px;
  background-repeat: no-repeat;
  background-image: url(/src/assets/img/easteregg/heart.png);
}
</style>