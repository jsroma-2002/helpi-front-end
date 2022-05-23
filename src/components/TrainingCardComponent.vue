<template>
  <div class="gamemenu-content-training-cards">
    <div class="gamemenu-content-training-cards-img">
      <img
        src="https://i.ytimg.com/vi/1x4y9bLH0hs/maxresdefault.jpg"
        alt="Apex training"
      />
    </div>
    <h1>01</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta
      culpa sapiente qui voluptates doloremque nulla quas adipisci quis! Ut
      quibusdam consequatur excepturi enim numquam, assumenda laboriosam facere
      placeat similique.
    </p>
  </div>
</template>

<script>
export default {
  name: "TrainingCard",
};
</script>

<style scoped>
.gamemenu-content-training-cards {
  position: relative;
  height: 400px;

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
