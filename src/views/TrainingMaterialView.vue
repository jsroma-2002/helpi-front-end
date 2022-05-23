<template>
  <section class="gamemenu-section">
    <div class="gamemenu-content">
      <div class="gamemenu-info">
        <h2>About 10 Tips Apex<br /></h2>
        <p>Made by Expert Name</p>
        <p>Likes: 150</p>
        <div class="gamemenu-info-group">
          <a href="#" class="gamemenu-info-btn">Add to Library</a>
          <a @click="navigateToGameMenuView" href="#" class="gamemenu-info-btn">Go to Game Menu</a>
        </div>
      </div>
      <div class="gamemenu-content-training-section">
        <TrainingCard
          coverUrl="https://i.ytimg.com/vi/1x4y9bLH0hs/maxresdefault.jpg"
          name="10 Tips Apex"
        ></TrainingCard>
      </div>
    </div>
  </section>
</template>

<script>
import TrainingCard from "../components/TrainingCardComponent.vue";
export default {
  name: "Training-Material",
  components: {
    TrainingCard,
  },
  methods: {
    navigateToGameMenuView() {
      this.$router.push({ name: "game" });
    },
  },
};
</script>

<style scoped>
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
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
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

.gamemenu-content-training {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gamemenu-content-training-section {
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
