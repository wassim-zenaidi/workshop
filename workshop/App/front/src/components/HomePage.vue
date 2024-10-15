<template>
  <div>
    <NavbarCard></NavbarCard>
    <main>
      <section class="welcome-section">
        <div class="banner-overlay">
          <div class="banner-text"> 
            <h1 class="title">WebProtectU</h1>
            <h6>Naviguez en toute sécurité, maîtrisez les réseaux sociaux et protégez votre vie numérique.</h6>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  name: "HomePage",
  components: {
    NavbarCard,
  },
};
</script>

<style scoped>
/* Styles CSS pour la bannière noire avec texte */
.banner-overlay {
  position: relative;
  margin-top: 50px;
  width: 100%;
  height: 300px; /* Hauteur ajustée selon votre besoin */
  /*background-color: #262525; /* Fond noir */
  background-image: url('../assets/img/protect.jpg');
  background-size: cover; /* Assure que l'image couvre toute la zone */
  background-position: center; /* Centre l'image */
  display: flex;
  justify-content: center; /* Centre le contenu horizontalement */
  align-items: center; /* Centre le contenu verticalement */
  overflow: hidden;
}

.banner-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background-color: rgba(0, 0, 0, 0.5); /* Superpose une couche noire transparente sur l'image */
  z-index: 0; /* La couche de l'overlay est derrière le texte */
}

.banner-text {
  font-size: 3rem;
  color: white;
  text-align: center;
  z-index: 1; /* Place le texte au-dessus de la bannière */
}

.title {
  color: #181818;
}

</style>
