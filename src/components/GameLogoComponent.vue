<template>
  <div class="home-img">
    <img :src="coverUrl" :alt="name" />
  </div>
</template>

<script>
export default {
  name: "GameLogo",

  props: ["coverUrl", "name"],

};
</script>

<style scoped>
.home-img {
  cursor: pointer;
  align-self: center;
  padding: 10px;
  transition: 0.3s;
  transition-property: transform;
  width: 250;
  height: 250;
}

.home-img:hover {
  transform: scale(1.5);
}
</style>
