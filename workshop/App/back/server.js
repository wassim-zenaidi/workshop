import express from 'express';
import sql from 'mssql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5174;

// Chaîne de connexion à SQL Server
const config = {
  user: 'adminsql',
  password: 'Wasslebg44!!',
  server: 'workshop-serv.database.windows.net',
  database: 'bdd_workshop',
  options: {
    encrypt: true, // Requis pour les connexions à Azure SQL
    trustServerCertificate: false,
  },
};

// Middleware pour analyser les requêtes JSON et configurer CORS
app.use(bodyParser.json());
app.use(cors()); // Permet toutes les origines

let pool; // Déclaration du pool de connexion à la base de données

// Connexion à la base de données SQL Server
sql.connect(config).then(dbPool => {
  pool = dbPool;
  if (pool.connecting) {
    console.log('Connexion à la base de données en cours...');
  }
  if (pool.connected) {
    console.log('Connecté à la base de données');
  }

  // Route POST pour ajouter une personne à la base de données
  app.post('/add-person', async (req, res) => {
    const { age, mail, sexe, motif, url } = req.body;

    // Validation basique des champs
    if (!age || !mail || !sexe || !motif || !url) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    // Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      return res.status(400).json({ error: 'Adresse e-mail invalide.' });
    }

    try {
      // Insertion des données dans la table 'Personne'
      await pool.request()
        .input('age', sql.Int, age)
        .input('mail', sql.NVarChar(100), mail)
        .input('sexe', sql.NVarChar(10), sexe)
        .input('motif', sql.NVarChar(255), motif)
        .input('url', sql.NVarChar(255), url) // Ajout de l'input pour l'URL
        .query(`
          INSERT INTO Personne (age, mail, sexe, motif, url) 
          VALUES (@age, @mail, @sexe, @motif, @url)
        `);

      res.status(200).json({ message: 'Personne ajoutée avec succès !' });
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la personne:', err);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de la personne.' });
    }
  });

  // Démarrage du serveur
  app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
  });

}).catch(err => {
  console.error('Erreur de connexion à la base de données:', err);
});
