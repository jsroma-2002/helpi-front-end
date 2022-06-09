<template>
  <div class="gamemenu-content-community-cards">
    <div class="gamemenu-content-community-cards-img">
      <img
        src="https://cdn2.vectorstock.com/i/1000x1000/61/81/in-progress-vector-16686181.jpg"
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
  name: "CommunityCard",
  props: ["name", "description"],
};
</script>

<style scoped>
.gamemenu-content-community-cards {
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

.gamemenu-content-community-cards::before {
  position: absolute;
  content: "";
  top: 99%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #18932a;
  transition: 0.4s;
}

.gamemenu-content-community-cards:hover:before {
  top: 50%;
}

.gamemenu-content-community-cards-img {
  width: 100%;
  height: 50%;
}

.gamemenu-content-community-cards-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gamemenu-content-community-cards h1 {
  font-size: 30px;
  position: relative;
}

.gamemenu-content-community-cards:hover h1 {
  color: #fff;
}

.gamemenu-content-community-cards p {
  font-size: 14px;
  position: relative;
}

.gamemenu-content-community-cards:hover p {
  color: #fff;
}
</style>