<script setup lang="ts">
</script>

<template>
  <div class="timelineWrap">
    <div class="content">
      <div class="profile">
        <div class="img" />
        <p class="name">두별</p>
      </div>
      <div class="column">
        <p>
          입사 1주년 회고록을 써봤어요!
          <a
            target="_blink"
            href="https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고"
            >https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고</a
          >
        </p>
        <div class="img">
          <a
            target="_blink"
            href="https://velog.io/@doobyeol/개발자-해보니까-어때-개발-1년차-회고"
          >
            <img
              width="100%"
              height="100%"
              src="/src/assets/img/timeline/221130.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timelineWrap {
  width: 100%;
  margin-top: 40px;
  font-family: "";
}

.timelineWrap .content {
  width: 83%;
  margin: 40px auto 0;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -2px rgb(150 151 158 / 43%);
  padding: 20px;
}

.timelineWrap .profile {
  display: flex;
}
.timelineWrap .profile .name {
  line-height: 35px;
  padding-left: 10px;
}
.timelineWrap .profile .img {
  width: 35px;
  height: 35px;
  border: 1px solid rgba(204, 204, 204, 0.734);
  border-radius: 20px;
  background-image: url(/src/assets/img/content/pic_15.png);
  background-position: center;
  background-size: cover;
}

.timelineWrap .column {
  margin-top: 10px;
}

.timelineWrap .column a {
  color: #a67db6;
}
.timelineWrap .column .img {
  width: 100%;
  height: 150px;
  background-size: cover;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
}

.timelineWrap .column .img img {
  object-fit: contain;
}
</style>