<template>
  <section class="profile-section">
    <div class="profile-content">
      <h2>{{ userStore.name }}</h2>
      <p>{{ userStore.email }}</p>
    </div>
  </section>
  <h2 class="profile-training-cards-title">My Training Materials</h2>
  <div class="profile-content-training">
    <div class="profile-content-training-section">
      <div
        v-for="trainingMaterial in trainingMaterials.slice(0, 4)"
        :key="trainingMaterial.trainingMaterialId"
      >
        <TrainingCard
          @click="navigateToTrainingView(trainingMaterial.trainingMaterialId)"
          :coverUrl="trainingMaterial.trainingCoverUri"
          :name="trainingMaterial.title"
          :description="trainingMaterial.trainingDescription"
        ></TrainingCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>

<script>
import TrainingCard from "../components/TrainingCardComponent.vue";
import helpiApiService from "../services/helpi-api-service";
import { useUserStore } from "../stores/userStore";

export default {
  name: "Game-Menu",
  
  data() {
    return {
      errors: [],

      trainingMaterials: [],

      helpiApi: helpiApiService,
    };
  },

  created() {
    this.retrieveTrainingMaterials(useUserStore().id);
  },

  methods: {
    retrieveTrainingMaterials(playerId) {
      this.helpiApi
        .getTrainingMaterialByPlayer(playerId)
        .then((response) => {
          this.trainingMaterials = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  components: {
    TrainingCard,
  },
};
</script>

<style scoped>
.profile-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
}

.profile-content {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
}

.profile-content h2 {
  color: #141f6a;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
  text-align: center;
}

.profile-content p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
}

.profile-training-cards-title {
  text-align: center;
  color: #666785;
  background-clip: text;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
}

.profile-content-training {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-content-training-section {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 400px));
  gap: 20px;
  padding: 20px;
}
</style>
