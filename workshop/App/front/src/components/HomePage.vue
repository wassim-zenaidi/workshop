<template>
  <div>
      <NavbarCard></NavbarCard>
    <main>
      <section class="welcome-section">
        <div class="banner-overlay">
          <div class="banner-text"> 
            <h1 class="title">WeProtectU</h1>
            <h6>Naviguez en toute sécurité, maîtrisez les réseaux sociaux et protégez votre vie numérique</h6>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div class="article">
    <h2 class="article-title">
      Articles
    </h2>
    <a href="https://www.info.gouv.fr/actualite/reseaux-sociaux-comment-proteger-les-jeunes" class="link">Protéger les jeunes des réseaux sociaux</a>
    <a href="https://e-enfance.org/informer/reseaux-sociaux/" class="link">Dangers des réseaux pour les mineurs</a>
    <a href="https://www.pourlasolidarite.eu/fr/ICUDproject_Discrimination_reseaux_sociaux" class="link">Discriminations sur les réseaux sociaux</a>
    <a href="https://www.service-public.fr/particuliers/vosdroits/F32575" class="link">Signaler un contenu incitant à la haine et aux discriminations</a>
    <a href="https://www.kaspersky.fr/resource-center/threats/top-seven-dangers-children-face-online" class="link">Dangers principaux auxquels les enfants sont confrontés sur internet</a>

  </div>
  <div class="article-content">
    <div class="article-image">
      <img src="../assets/img/Social_media.png" alt="réseaux sociaux" class="article-image1" />
      <img src="../assets/img/peopleeee.jpg" alt="gens" class="article-image2" />
    </div>

    <div class="faq-container">
      <h2>Foire Aux Questions (FAQ)</h2>
      <div class="faq-item">
        <button class="faq-question">Quels sont les dangers des réseaux sociaux pour les jeunes?</button>
        <div class="faq-answer">
          <p>Les jeunes peuvent être exposés à des contenus inappropriés, au cyberharcèlement, et à des risques de confidentialité de leurs données personnelles.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Comment protéger sa vie privée en ligne?</button>
        <div class="faq-answer">
          <p>Pour protéger sa vie privée en ligne, il est important de paramétrer ses comptes avec des réglages stricts de confidentialité et de ne pas partager d'informations personnelles.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Que faire en cas de cyberharcèlement?</button>
        <div class="faq-answer">
          <p>Il est essentiel d'en parler à un adulte de confiance, de signaler les comptes concernés, et de conserver des preuves du harcèlement.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Que faire en cas de discrimination en ligne?</button>
        <div class="faq-answer">
          <p>Vous pouvez signaler le contenu au réseau social concerné. Il est aussi conseillé de conserver des preuves (captures d’écran), de bloquer l’auteur des propos discriminatoires et de contacter une association de défense des droits ou les autorités compétentes.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Les réseaux sociaux peuvent-ils affecter ma santé mentale ?</button>
        <div class="faq-answer">
          <p>Oui, une utilisation excessive peut entraîner de l'anxiété, de la dépression et une faible estime de soi, surtout si vous vous comparez constamment aux autres.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Comment éviter la désinformation sur les réseaux sociaux ?</button>
        <div class="faq-answer">
          <p>Vérifiez les sources, recoupez les informations avec des médias fiables, et soyez sceptique face aux nouvelles sensationnelles sans fondement.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Quels sont les risques de partager trop d'informations personnelles ?</button>
        <div class="faq-answer">
          <p>Partager trop d'informations personnelles peut mener à des vols d'identité, du harcèlement et à des atteintes à la vie privée.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Mon compte a été piraté, que faire ?</button>
        <div class="faq-answer">
          <p>Si vous ne pouvez plus vous connecter à votre compte : contactez le service concerné pour signaler votre piratage et demandez la réinitialisation de votre mot de passe.</p>
        </div>
      </div>

    </div>

    <section class="newsletter">
      <div class="newsletter-container">
        <h2>Inscrivez-vous à notre newsletter</h2>
        <p>Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.</p>
        <form action="#" method="POST" class="newsletter-form">
          <input type="email" name="email" placeholder="Votre adresse e-mail" required>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </section>

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

.banner-overlay {
  position: relative;
  margin-top: 0;
  width: 100%;
  height: 350px;
  background-image: url('../assets/img/woman.jpg');
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center; /* centre le contenu verticalement */
  overflow: hidden;
}

.banner-text h1, .banner-text h6 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  color: #f3e5d9;
  text-align: center;
}

.banner-text {
  font-size: 3rem;
  z-index: 1;
}

.article {
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 78%;
}

.article-title {
  font-family: 'Arial', sans-serif;
  color: #333;
  text-align: left;
  margin-bottom: 20px;
}

.link {
  display: block;
  font-family: 'Arial', sans-serif;
  color: #0066cc;
  text-decoration: none;
  margin: 10px 0;
  transition: color 0.3s ease;
}

.link:hover {
  color: #004080;
}

.article-content {
  .link {
    display: block;
    margin-left: 15px;
  }
}

.article-image {
  transition: transform 0.3s ease;
  &:hover{
    transform: scale(1.05); /* zoom de 5% sur l'image au survol */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
}

.article-image1 {
  float: right;
  max-width: 30%;
  margin-bottom: 150px;
  margin-right: 50px;
  margin-top: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: 0.9;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.article-image2 {
  float: right;
  max-width: 25%;
  margin-bottom: 50px;
  margin-right: -200px;
  margin-top: 5px;
  z-index: 1; /* image au-dessus de l'autre */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  opacity: 0.9;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.newsletter {
  background-color: #f1f1f1;
  padding: 40px 20px;
  text-align: center;
  border-top: 2px solid #ddd;
  clear: both; /* la section newsletter commence après les images */
}

.newsletter-container {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.newsletter p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.newsletter-form input[type="email"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}

.newsletter-form button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #004080;
}

.faq-container {
  width: 45%;
  margin-left: 20px;
  margin-top: 100px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.faq-container h2 {
  color: #333;
  margin-bottom: 20px;
}

.faq-item {
  margin-bottom: 15px;
  }

.faq-question {
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  background-color: #e9e9e9;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #007bff;
  }
}

.faq-answer {
  display: none;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}

.faq-answer p {
  color: #181818;
}

.faq-question:focus + .faq-answer {
  display: block;
}

</style>
