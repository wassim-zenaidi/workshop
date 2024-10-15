<template>
  <div>
    <NavbarCard></NavbarCard>

    <!-- Conteneur pour le bouton centré et le texte -->
    <div class="download-container">
      <p class="description">
        Découvrez notre plugin innovant qui analyse les contenus web pour détecter les discriminations racistes, sexistes et autres. 
      </p>
      <a class="download-button" href="/path/to/your/plugin.zip" download>
        Télécharger le Plugin
      </a>
    </div>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  components: {
    NavbarCard,
  },
};
</script>

<style scoped>
/* Conteneur pour centrer verticalement et horizontalement */
.download-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 60px); /* Ajuste la hauteur pour tenir compte de la barre de navigation */
  text-align: center;
  background-color: #262525;
}

/* Style pour le texte de présentation */
.description {
  font-size: 1em;
  margin-bottom: 30px;
  color: #f5f3f3;
  max-width: 600px;
  line-height: 1.6;
}

/* Style pour le bouton de téléchargement */
.download-button {
  background-color: #7B68EE;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2em;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 8px 15px rgba(240, 236, 236, 0.1);
}

/* Animation au survol du bouton */
.download-button:hover {
  background-color: #6A5ACD;
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}
</style>
