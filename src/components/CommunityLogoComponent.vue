<template>
  <div>
    <img  class="home-img" :src="coverUrl" :alt="name" />
  </div>
</template>

<script>
export default {
  name: "CommunityLogo",

  props: ["coverUrl", "name"],

};
</script>

<style scoped>
.home-img {
    height: 600px;
}
</style>