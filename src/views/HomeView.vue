<template>
  <section class="home-section">
    <div class="home-content">
      <div class="home-info">
        <h2>Chosse your game <br /><span>Improve now!</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta,
          eveniet in odio beatae dignissimos temporibus voluptatem modi,
          cupiditate mollitia, dolorum doloribus incidunt officia voluptatum
          placeat corrupti exercitationem? Quibusdam, reprehenderit.
        </p>
        <a @click="navigateToRegisterView" href="#" class="home-info-btn"
          >Register Now</a
        >
      </div>
      <div v-for="game in games" :key="game.id">
        <GameLogo
          @click="navigateToGameMenuView(game.id)"
          :coverUrl="game.coverUri"
          :name="game.name"
        ></GameLogo>
      </div>
    </div>
    <div class="home-div-media-icons">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </section>
</template>

<script>
import GameLogo from "../components/GameLogoComponent.vue";
import helpiApiService from "../services/helpi-api-service";

export default {
  name: "Home",
  data() {
    return {
      games: [],
      errors: [],
      helpiApi: helpiApiService,
    };
  },
  components: {
    GameLogo,
  },

  mounted() {
    this.getGames();
  },

  methods: {
    navigateToGameMenuView(gameId) {
      this.$router.push({ name: "game", params: { id: gameId } });
    },

    navigateToRegisterView() {
      this.$router.push({ name: "register" });
    },

    getGames() {
      this.helpiApi
        .getGamesApi()
        .then((response) => {
          this.games = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.home-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}

.home-content {
  margin: 60px 100px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.home-info {
  max-width: 650px;
  padding-bottom: 25px;
}

.home-info h2 {
  color: #666785;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.home-info h2 span {
  color: #18932a;
  font-size: 50px;
  font-weight: 600;
}

.home-info p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
}

.home-info-btn {
  color: #fff;
  background: #18932a;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
}

.home-info-btn:hover {
  background: #66b974;
}

.home-div-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.home-div-media-icons a {
  position: relative;
  color: #666785;
  font-size: 25px;
  transition: 0.3s;
  transition-property: transform;
}

.home-div-media-icons a:not(:last-child) {
  margin-right: 60px;
}

.home-div-media-icons a:hover {
  transform: scale(1.5);
}

/* Media Query */

@media only screen and (max-width: 960px) {
  .home-content .home-info h2 {
    font-size: 45px;
    font-weight: 600;
  }

  .home-content .home-info h2 span {
    font-size: 40px;
    font-weight: 600;
  }

  .home-content .home-info p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 560) {
  .home-content .home-info h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .home-content .home-info h2 span {
    font-size: 30px;
    font-weight: 600;
  }

  .home-content .home-info p {
    font-size: 14px;
  }
}
</style>
