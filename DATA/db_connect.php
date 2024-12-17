<?php
$servername = "192.168.8.29:3306";  // Le nom du service dans le fichier docker-compose sur l'autre machine
$username = "root";       // Utilisateur de la base de données
$password = "password"; // Mot de passe de l'utilisateur
$dbname = "docker_avance";    // Nom de la base de données
//$servername = "192.168.9.171:3306";  // Le nom du service dans le fichier docker-compose
//$username = "root";       // Utilisateur de la base de données
//$password = "root"; // Mot de passe de l'utilisateur
//$dbname = "db";    // Nom de la base de données

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion a échoué: " . $conn->connect_error);
}
echo "
<body style='background-color: #ffffa6;'>
<h1 style='text-align: center;margin-top: 200px; font-size: 150px; color: #58a9dc; text-decoration: underline red'>
Connexion réussie à la base de données MariaDB
</h1>
</body>
";
