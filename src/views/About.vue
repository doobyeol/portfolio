<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useAskStore } from "../store/ask";
import { storeToRefs } from "pinia";

const emit = defineEmits(["showPopup"]);
const askStore = useAskStore();
const { asks, askItem, chatItems } = storeToRefs(askStore);

function showPopup() {
  emit("showPopup", true);
}
</script>

<template>
  <div class="content">
    <div class="chat_wrap">
      <ul class="chat_body">
        <li v-for="item in chatItems" :key="item.text" :class="item.class">
          <div class="prf_box" v-if="item.class == 'left'">
            <div class="profile">
              <img alt="" src="/src/assets/img/content/pic_15.png" />
              <p class="chat_username">두별</p>
            </div>
          </div>
          <div class="txt_box">
            <div class="chat_text">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="input_wrap" @click="showPopup">
      <div class="emoji"></div>
      <div class="input">
        <p>무엇을 물어볼까요?</p>
      </div>
      <div class="send">
        <button>전송</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input_wrap {
  font-family: "모리스9" !important;
  display: flex;
  width: 100%;
  height: 6%;
  max-width: 800px;
  max-height: 50px;
  margin: 15px auto 0;
  background-color: #fff;
  border-radius: 5px;
}

.input_wrap .emoji {
  width: 100%;
  max-width: 30px;
  min-width: 30px;
  max-height: 30px;
  background-image: url(/src/assets/img/mail/emoji.png);
  background-size: cover;
  margin: 6px 0 0 9px;
  flex: 1;
}
.input_wrap .input {
  flex: 10;
  background-color: #e2e2e2;
  margin: 7px;
  cursor: pointer;
}

.input_wrap .input p {
  width: 100%;
  margin: 7px 0 0 9px;
}

.input_wrap .send {
  flex: 2;
  margin: 7px;
  margin-left: 0;
  text-align: center;
}

.input_wrap .send button {
  font-family: "모리스9";
  background-color: #a54d72;
  color: #fff;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
}

.content {
  font-family: unset !important;
  background-image: url("../assets/img/mail/content_bg.png");
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 25px;
}

.content .chat_wrap {
  width: 100%;
  height: 85%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  overflow-y: auto;
}

.content .chat_wrap .chat_body {
  padding: 10px;
}
.content .chat_wrap .chat_body .chat_text {
  display: flex;
}

.content .chat_wrap .chat_body .left,
.content .chat_wrap .chat_body .right {
  width: 100%;
}

.content .chat_wrap .chat_body .right {
  margin-top: 20px;
}

.content .chat_wrap .right .chat_text {
  flex-direction: row-reverse;
}
.content .chat_wrap .right .txt_box .chat_text p {
  margin: 5px 5px 0 0;
}

.content .chat_wrap .profile {
  display: flex;
  padding-left: 5px;
}
.content .chat_wrap .profile img {
  width: 30px;
  height: 30px;
}
.content .chat_wrap .profile .chat_username {
  font-size: 1em;
  font-weight: bold;
  line-height: 30px;
  padding-left: 10px;
  font-family: "모리스9";
}

.content .chat_wrap .txt_box .chat_text p {
  width: max-content;
  max-width: 75%;
  background-color: #e5e5e6;
  padding: 10px;
  margin: 5px 0 0 5px;
  border-radius: 6px;
}

.content > .txt {
  padding: 40px 0;
  height: 117px;
}

.content > .txt > ul {
  overflow: hidden;
  width: 918px;
  margin: 0 auto;
}

.content > .txt > ul > li {
  float: left;
}

.content > .txt > ul > .img {
  background-image: url("../assets/img/mail/txt_05.png");
  width: 801px;
  height: 54px;
  background-position: center;
  background-size: cover;
}

.content > .txt > ul > .btn {
  background-image: url("../assets/img/mail/btn.png");
  width: 117px;
  height: 73px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.content > .txt > ul > .btn > a > div {
  width: 117px;
  height: 73px;
}

.content .chat_wrap::-webkit-scrollbar {
  width: 8px;
}

.content .chat_wrap::-webkit-scrollbar-thumb {
  height: 10%;
  background: #a54d72;
  border-radius: 10px;
}

.content .chat_wrap::-webkit-scrollbar-track {
  background: rgba(212, 33, 244, 0.1);
}
</style>