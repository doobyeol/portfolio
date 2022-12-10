<script setup lang="ts">

defineProps<{
  items: Array<{
    value: string,
    color: string,
    logo: string
  }>;
}>();

</script>

<template>
  <ul class="badge">
    <li 
      v-for="item in items" 
      :key="item.value" 
      :style="{ backgroundColor : item.color }"
    >
      <img :src="item.logo" :style="{ width : item.logo ? '13px' : '0px' }"/>
      {{ item.value }}
    </li>
  </ul>
</template>

<style scoped>
.badge {
  display: flex;
  flex-wrap: wrap;
}

.badge li {
    width: fit-content;
    border-radius: 7px;
    color: #fff;
    margin: 8px 9px 0 0;
    padding: 3px 11px;
    line-height: 19px;
    vertical-align: middle;
    font-weight: 600;
    font-size: 0.9em;
    font-family: '모리스9';
}

img {
  filter: invert(1);
  display: inline-block;
  width: 13px;
  position: relative;
  top: 3px;
}
</style>