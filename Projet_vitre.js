const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Middleware pour parser les données JSON du webhook
app.use(bodyParser.json());

// Middleware pour servir des fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour afficher ton fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour recevoir les données du webhook
app.post('/webhook', (req, res) => {
  const vitrineData = req.body; // Données envoyées par Make.com

  // Tu peux maintenant envoyer ces données au client via WebSocket ou mettre à jour ton fichier HTML
  console.log('Données reçues :', vitrineData);

  // Optionnellement, tu peux renvoyer une réponse à Make.com pour dire que c'est ok
  res.status(200).send('Données reçues');
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
