<template>
  <section class="comunity-menu-section">
    <div class="comunity-menu-content">
      <div class="comunity-menu-info">
        <h2>Welcome to {{ community.communityTitle }}<br /><span>Comunity</span></h2>
        <p>
          {{ community.communityDescription }}
        </p>
        <div class="comunity-menu-info-group">
          <a href="#" class="comunity-menu-info-btn">Join Community</a>
        </div>
      </div>
      <GameLogo coverUrl="https://cdn-icons-png.flaticon.com/512/5229/5229377.png" name="in progress"></GameLogo>
    </div>
  </section>
</template>

<script>
import helpiApiService from "../services/helpi-api-service";
import GameLogo from "../components/GameLogoComponent.vue";

export default {
  name: "Community-Menu",

  data() {
    return {
      community: {
        communityTitle: "",
        communityDescription: "",
        communityId: 0,
      },

      errors: [],

      helpiApi: helpiApiService,
    };
  },

  created() {
    this.retrieveComunity(this.$route.params.id);
  },

  methods: {
    retrieveComunity(communityId ) {
      this.helpiApi
        .getCommunity(communityId )
        .then((response) => {
          this.community = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },

  components: {
    GameLogo
  }
};
</script>

<style scoped>
.comunity-menu-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}

.comunity-menu-content {
  margin: 60px 100px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.comunity-menu-info {
  max-width: 650px;
  padding-bottom: 25px;
}

.comunity-menu-info h2 {
  color: #666785;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.comunity-menu-info h2 span {
  color: #141F6A;
  font-size: 50px;
  font-weight: 600;
}

.comunity-menu-info p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
}

.comunity-menu-info-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.comunity-menu-info-btn {
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

.comunity-menu-info-btn:hover {
  background: #1ece38;
}

.comunity-menu-training-cards-title {
  text-align: center;
  color: #666785;
  background-clip: text;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
}

.comunity-menu-content-training {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comunity-menu-content-training-section {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 400px));
  gap: 20px;
  padding: 20px;
}

@media only screen and (max-width: 960px) {
  .comunity-menu-content .comunity-menu-info h2 {
    font-size: 45px;
    font-weight: 600;
  }

  .comunity-menu-content .comunity-menu-info h2 span {
    font-size: 40px;
    font-weight: 600;
  }

  .comunity-menu-content .comunity-menu-info p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 560) {
  .comunity-menu-content .comunity-menu-info h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .comunity-menu-content .comunity-menu-info h2 span {
    font-size: 30px;
    font-weight: 600;
  }

  .comunity-menu-content .comunity-menu-info p {
    font-size: 14px;
  }
}
</style>
