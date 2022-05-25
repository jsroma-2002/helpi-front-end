<template>
  <section class="gamemenu-section">
    <div class="gamemenu-content">
      <div class="gamemenu-info">
        <h2>Welcome to {{ game.name }}<br /><span>Game Menu</span></h2>
        <p>
          {{ game.description }}
        </p>
        <div class="gamemenu-info-group">
          <a href="#" class="gamemenu-info-btn">Find Coach</a>
          <a href="#" class="gamemenu-info-btn">Find Training Material</a>
        </div>
      </div>
      <GameLogo :coverUrl="game.coverUri" :name="game.name"></GameLogo>
    </div>
    <h2 class="gamemenu-training-cards-title">Prominent Training Material</h2>
    <div class="gamemenu-content-training">
      <div class="gamemenu-content-training-section">
        <div
          v-for="trainingMaterial in trainingMaterials.slice(0, 4)"
          :key="trainingMaterial.trainingMaterialId"
        >
          <TrainingCard @click="navigateToTrainingView(trainingMaterial.trainingMaterialId)"
            :coverUrl="trainingMaterial.trainingCoverUri"
            :name="trainingMaterial.title"
            :description="trainingMaterial.trainingDescription"
          ></TrainingCard>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GameLogo from "../components/GameLogoComponent.vue";
import TrainingCard from "../components/TrainingCardComponent.vue";
import helpiApiService from "../services/helpi-api-service";

export default {
  name: "Game-Menu",

  data() {
    return {
      game: {
        name: "",
        description: "",
        coverUri: "",
        id: 0,
      },

      errors: [],

      trainingMaterials: [],

      helpiApi: helpiApiService,
    };
  },

  created() {
    this.retrieveGame(this.$route.params.id);
    this.retrieveTrainingMaterials(this.$route.params.id);
  },

  methods: {
    retrieveGame(gameId) {
      this.helpiApi
        .getGame(gameId)
        .then((response) => {
          this.game = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    retrieveTrainingMaterials(gameId) {
      this.helpiApi
        .getTrainingMaterialGameId(gameId)
        .then((response) => {
          this.trainingMaterials = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    navigateToTrainingView(trainingId) {
      this.$router.push({ name: "training", params:{ id: this.$route.params.id, trainingId: trainingId} });
    },
  },

  components: {
    GameLogo,
    TrainingCard,
  },
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
  color: #141F6A;
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
  background: #141F6A;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.gamemenu-info-btn:hover {
  background: #2135bb;
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
  grid-template-columns: repeat(auto-fit, minmax(290px, 400px));
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
