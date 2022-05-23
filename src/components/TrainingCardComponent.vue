<template>
  <div class="gamemenu-content-training-cards">
    <div class="gamemenu-content-training-cards-img">
      <img
        :src="coverUrl"
        :alt="name"
      />
    </div>
    <h1>{{name}}</h1>
    <p>
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "TrainingCard",
  props: ["coverUrl", "name", "description"],
};
</script>

<style scoped>
.gamemenu-content-training-cards {
  position: relative;
  height: 400px;
  max-width: 715px;
  cursor: pointer;
  box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
}

.gamemenu-content-training-cards::before {
  position: absolute;
  content: "";
  top: 99%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #18932a;
  transition: 0.4s;
}

.gamemenu-content-training-cards:hover:before {
  top: 50%;
}

.gamemenu-content-training-cards-img {
  width: 100%;
  height: 50%;
}

.gamemenu-content-training-cards-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gamemenu-content-training-cards h1 {
  font-size: 30px;
  position: relative;
}

.gamemenu-content-training-cards:hover h1 {
  color: #fff;
}

.gamemenu-content-training-cards p {
  font-size: 14px;
  position: relative;
}

.gamemenu-content-training-cards:hover p {
  color: #fff;
}
</style>
