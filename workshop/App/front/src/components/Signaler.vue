<template>
  <div>
    <NavbarCard></NavbarCard>
    
    <!-- Formulaire pour soumettre les données à la base SQL -->
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div>
          <label for="age">Âge:</label>
          <input type="number" v-model="person.age" id="age" required min="0" />
        </div>

        <div>
          <label for="mail">Email:</label>
          <input type="email" v-model="person.mail" id="mail" required />
        </div>

        <div>
          <label for="sexe">Sexe:</label>
          <select v-model="person.sexe" id="sexe" required>
            <option value="" disabled selected>Sélectionnez un sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label for="motif">Motif:</label>
          <select v-model="selectedMotif" id="motif" @change="updateMotif" required>
            <option value="" disabled selected>Sélectionnez un motif</option>
            <option value="Racisme">Racisme</option>
            <option value="Harcèlement">Harcèlement</option>
            <option value="Homophobie">Homophobie</option>
            <option value="Cyberharcèlement">Cyberharcèlement</option>
            <option value="Diffamation en ligne">Diffamation en ligne</option>
            <option value="Menaces">Menaces</option>
            <option value="Intimidation">Intimidation</option>
            <option value="Usurpation d'identité">Usurpation d'identité</option>
            <option value="Discrimination">Discrimination</option>
            <option value="Trolling">Trolling</option>
            <option value="Harcèlement sexuel">Harcèlement sexuel</option>
            <option value="Cyberstalking">Cyberstalking</option>
            <option value="Doxxing">Doxxing</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div v-if="showCustomMotif">
          <label for="customMotif">Motif personnalisé:</label>
          <textarea v-model="person.motif" id="customMotif" placeholder="Décrivez votre motif ici..."></textarea>
        </div>

        <div>
          <label for="url">URL du site problématique :</label>
          <input type="text" v-model="person.url" id="url" required />
        </div>

        <div class="confidentiality-container">
          <input type="checkbox" v-model="confidential" id="confidential" class="confidential-checkbox" />
          <label for="confidential" class="confidential-label">J'accepte que mon email soit traité de manière confidentielle.</label>
        </div>

        <button type="submit" :disabled="!isConfidentialAccepted">Envoyer</button>
      </form>

      <!-- Message de validation -->
      <transition name="fade">
        <div v-if="successMessage" class="success-message" @click="resetSuccessMessage">
          {{ successMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  components: {
    NavbarCard,
  },
  data() {
    return {
      person: {
        age: null,
        mail: '',
        sexe: '',
        motif: '',
        url: '' // Ajout de la propriété url
      },
      selectedMotif: '', // Variable pour le motif sélectionné
      showCustomMotif: false, // Indicateur pour afficher la zone de texte personnalisée
      successMessage: '', // Ajout de la variable pour le message de succès
      confidential: false // Ajout de la variable pour la confidentialité
    };
  },
  computed: {
    isConfidentialAccepted() {
      return this.confidential; // Renvoie vrai si la case à cocher est cochée
    },
  },
  methods: {
    updateMotif() {
      // Vérifie si le motif sélectionné est "Autre"
      this.showCustomMotif = this.selectedMotif === 'Autre';
      // Si un motif prédéfini est sélectionné, on met à jour le champ 'motif' dans person
      if (this.selectedMotif !== 'Autre') {
        this.person.motif = this.selectedMotif;
      }
    },
    submitForm() {
      // Envoyer les données au backend Node.js
      fetch('http://localhost:5174/add-person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.person), // 'person' contient les données du formulaire
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert('Erreur: ' + data.error);
        } else {
          this.successMessage = 'Personne ajoutée avec succès !'; // Message de succès
          this.resetForm(); // Réinitialiser le formulaire après soumission réussie
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de la personne:', error);
        alert('Erreur lors de l\'ajout de la personne');
      });
    },
    resetForm() {
      // Réinitialise le formulaire
      this.person = {
        age: null,
        mail: '',
        sexe: '',
        motif: '',
        url: '' // Réinitialisation de l'url
      };
      this.selectedMotif = ''; // Réinitialisation du motif sélectionné
      this.showCustomMotif = false; // Masquer la zone de texte personnalisée
      this.successMessage = ''; // Réinitialiser le message de succès
      this.confidential = false; // Réinitialiser la case de confidentialité
    },
    resetSuccessMessage() {
      this.successMessage = '';
    }
  },
};
</script>

<style scoped>
/* Styles basiques pour le formulaire */
.form-container {
  max-width: 300px; /* Réduction de la largeur de la boîte du formulaire */
  margin: 50px 0 50px 20px; /* Aligner à gauche */
  padding: 15px; /* Réduction de l'espace intérieur */
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #6050dc; /* Couleur de fond plus claire pour un meilleur contraste */
}

form div {
  margin-bottom: 10px; /* Réduction de l'espace entre les éléments du formulaire */
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px; /* Réduction de l'espace sous les labels */
}

input, select, textarea {
  width: 100%;
  padding: 8px; /* Réduction de l'espace intérieur des champs */
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #7B68EE;
  color: white;
  padding: 8px 15px; /* Réduction de l'espace intérieur du bouton */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc; /* Change la couleur du bouton désactivé */
  cursor: not-allowed; /* Change le curseur pour indiquer que le bouton est désactivé */
}

button:hover:not(:disabled) {
  background-color: #6A5ACD; /* Change la couleur du bouton au survol uniquement si il n'est pas désactivé */
}

/* Styles pour le message de succès */
.success-message {
  margin-top: 15px;
  color: green; /* Couleur du message de succès */
  font-weight: bold;
  transition: opacity 0.5s ease; /* Animation douce pour l'apparition */
}

/* Animation fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active pour <2.1.8 */ {
  opacity: 0;
}

/* Styles pour la case à cocher de confidentialité */
.confidentiality-container {
  display: flex;
  align-items: center; /* Aligne verticalement la case à cocher et le texte */
  margin-top: 10px; /* Espacement au-dessus de la case à cocher */
}

.confidential-checkbox {
  width: 18px; /* Réduit la taille de la case à cocher */
  height: 18px; /* Réduit la taille de la case à cocher */
  margin-right: 5px; /* Espacement à droite de la case à cocher */
}

.confidential-label {
  font-size: 9px; /* Réduit la taille de la police du texte de confidentialité */
  color: #fff; /* Couleur blanche pour le texte de confidentialité */
  cursor: pointer; /* Change le curseur au survol */
}
</style>
