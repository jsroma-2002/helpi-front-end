<template>
  <section class="comunities-menu-section">
    <h2 class="comunities-menu-training-cards-title">Prominent Communities</h2>
    <div class="comunities-menu-content-training">
      <div class="comunities-menu-content-training-section">
        <div
          v-for="community in communities.slice(0, 4)"
          :key="community.communityId"
        >
          <CommunityCard
            @click="navigateToCommunityView(community.communityId)"
            :name="community.communityTitle"
            :description="community.communityDescription"
          ></CommunityCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommunityCard from "../components/CommunityCardComponent.vue";
import helpiApiService from "../services/helpi-api-service";

export default {
  name: "Comunity-Menu",

  data() {
    return {
      errors: [],

      communities: [],

      helpiApi: helpiApiService,
    };
  },

  created() {
    this.retrieveCommunities();
  },

  methods: {
    navigateToCommunityView(communityId) {
      this.$router.push({ name: "community", params: { id: communityId } });
    },

    retrieveCommunities() {
      this.helpiApi
        .getCommunities()
        .then((response) => {
          this.communities = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  components: {
    CommunityCard,
  },
};
</script>

<style scoped>
.comunities-menu-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}

.comunities-menu-content {
  margin: 60px 100px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.comunities-menu-info {
  max-width: 650px;
  padding-bottom: 25px;
}

.comunities-menu-info h2 {
  color: #666785;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.comunities-menu-info h2 span {
  color: #141f6a;
  font-size: 50px;
  font-weight: 600;
}

.comunities-menu-info p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
}

.comunities-menu-info-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.comunities-menu-info-btn {
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

.comunities-menu-info-btn:hover {
  background: #1ece38;
}

.comunities-menu-training-cards-title {
  text-align: center;
  color: #666785;
  background-clip: text;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
}

.comunities-menu-content-training {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comunities-menu-content-training-section {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 400px));
  gap: 20px;
  padding: 20px;
}

@media only screen and (max-width: 960px) {
  .comunities-menu-content .comunities-menu-info h2 {
    font-size: 45px;
    font-weight: 600;
  }

  .comunities-menu-content .comunities-menu-info h2 span {
    font-size: 40px;
    font-weight: 600;
  }

  .comunities-menu-content .comunities-menu-info p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 560) {
  .comunities-menu-content .comunities-menu-info h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .comunities-menu-content .comunities-menu-info h2 span {
    font-size: 30px;
    font-weight: 600;
  }

  .comunities-menu-content .comunities-menu-info p {
    font-size: 14px;
  }
}
</style>
