<script setup lang="ts">
</script>

<template>
  <div class="content">
    <div class="img"></div>

    <div class="txt">
      <ul>
        <li class="img"></li>
        <li class="btn">
          <a href="portfolio.html">
            <div></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content > .img {
  background-image: url("../assets/img/mail/content_02_02.png");
  width: 100%;
  height: 700px;
  background-position: center;
  background-size: cover;
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
</style>