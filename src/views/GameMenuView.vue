<template>
  <section class="gamemenu-section">
    <div class="gamemenu-content">
      <div class="gamemenu-info">
        <h2>Welcome to Apex Legends<br /><span>Game Menu</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta,
          eveniet in odio beatae dignissimos temporibus voluptatem modi,
          cupiditate mollitia, dolorum doloribus incidunt officia voluptatum
          placeat corrupti exercitationem? Quibusdam, reprehenderit.
        </p>
        <div class="gamemenu-info-group">
          <a href="#" class="gamemenu-info-btn">Find Coach</a>
          <a href="#" class="gamemenu-info-btn">Find Training Material</a>
        </div>
      </div>
      <GameLogo
        coverUrl="https://github.com/Complexity-Gaming/Help-I-Landing-Page/blob/main/img/Apex.png?raw=true"
        name="Apex Legends"
      ></GameLogo>
    </div>
    <h2 class="gamemenu-training-cards-title">Prominent Training Material</h2>
    <div class="gamemenu-content-training">
      <div class="gamemenu-content-training-section">
        <TrainingCard
          coverUrl="https://i.ytimg.com/vi/1x4y9bLH0hs/maxresdefault.jpg"
          name="10 Tips Apex"
        ></TrainingCard>
        <TrainingCard
          coverUrl="https://i.ytimg.com/vi/UEwTnirimf0/maxresdefault.jpg"
          name="Tutorial Apex Legends"
        ></TrainingCard>
        <TrainingCard
          coverUrl="https://i.blogs.es/af52a9/apexguia/1366_2000.jpg"
          name="Aprendiendo Apex"
        ></TrainingCard>
        <TrainingCard
          coverUrl="https://i.ytimg.com/vi/K51APSqxLAk/maxresdefault.jpg"
          name="Guia Heroes Apex"
        ></TrainingCard>
      </div>
    </div>
  </section>
</template>

<script>
import GameLogo from "../components/GameLogoComponent.vue";
import TrainingCard from "../components/TrainingCardComponent.vue";

export default {
  name: "Game-Menu",
  components: {
    GameLogo,
    TrainingCard,
  }
};
</script>

<style scoped>
.gamemenu-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}

.gamemenu-content {
  margin: 60px 100px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.gamemenu-info {
  max-width: 650px;
  padding-bottom: 25px;
}

.gamemenu-info h2 {
  color: #666785;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.gamemenu-info h2 span {
  color: #18932a;
  font-size: 50px;
  font-weight: 600;
}

.gamemenu-info p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
}

.gamemenu-info-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gamemenu-info-btn {
  color: #fff;
  background: #18932a;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.gamemenu-info-btn:hover {
  background: #66b974;
}

.gamemenu-training-cards-title {
  text-align: center;
  color: #666785;
  background-clip: text;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
}

.gamemenu-content-training {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gamemenu-content-training-section {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
  padding: 20px;
}

@media only screen and (max-width: 960px) {
  .gamemenu-content .gamemenu-info h2 {
    font-size: 45px;
    font-weight: 600;
  }

  .gamemenu-content .gamemenu-info h2 span {
    font-size: 40px;
    font-weight: 600;
  }

  .gamemenu-content .gamemenu-info p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 560) {
  .gamemenu-content .gamemenu-info h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .gamemenu-content .gamemenu-info h2 span {
    font-size: 30px;
    font-weight: 600;
  }

  .gamemenu-content .gamemenu-info p {
    font-size: 14px;
  }
}
</style>
