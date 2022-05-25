<template>
  <section class="about-section">
    <div class="about-content">
      <div class="about-info">
        <h2>About Telegaming</h2>
        <p>
          Telegaming es un equipo formado por estudiantes dela carrera de ingenieria de
          software de la UPC. Nuestra idea es ofrecer una plataforma que ayude a jugadores 
          de videojuegos competitivos a mejorar cada dia. Creemos que mediante la colaboracion
          de la comunidad lograremos este objetivo y por eso lanzamos HELPI.
        </p>
      </div>
      <div>
        <div class="about-img">
          <img
            src="https://cdn.discordapp.com/attachments/955931985082204225/979125535781310484/telegaming.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}

.about-content {
  margin: 60px 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.about-info {
  max-width: 650px;
  padding-bottom: 25px;
}

.about-info h2 {
  color: #666785;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.about-info p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
}

.about-img {
  align-self: center;
  padding: 10px;
  transition: 0.3s;
  width: 250;
  height: 250;
}
</style>
