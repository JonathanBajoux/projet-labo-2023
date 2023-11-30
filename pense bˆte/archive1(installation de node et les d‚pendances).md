
## 1) Installation de node.js :

    Installer  node.js -> téléchargement du logiciel sur node js https://nodejs.org/en de préference la version LTS.

## 2) Initialiser un projet express via le terminal VScode (commande prompt) :
    
    Dans le terminal VScode taper : npm init -> Créer un fichier package.json pour initialiser les dépendances pour la création d'un projet.

    Installer express via le terminal de VScode taper : npm (i)nstalle express -> installe les dépendances d'express.

## 3) Installation de nodemon via le terminal VScode (commande prompt) :

    Installer nodemon via le terminal de VScode taper : npm (i)nstalle --save-dev nodemon -> installe les dépendances nodemon que le dans le projet cela permet de lancer le serveur et de l'actualiser.
                                      "scripts": {
    Dans le package.json entrer : -->   "start": "node server.js",
                                        "test": "echo \"Error: no test specified\" && exit 1"
                                      },

## 4) Installation de dotenv via le terminal VScode (commande Prompt) :

    installer dotenv via le terminal VScode taper : npm (i)nstalle dotenv --> installe les dépendances dotenv permet de lier sa db

    Dans votre dossier source back end creer un fichier .env et entrer ces élément :
    
    PORT= exemple 3000
                                                                                        DB_SERVER="nom de votre server local"
                                                                                        DB_DATABASE="nom de votre db"
                                                                                        DB_USERNAME="nom d'utilisateur de la db"
                                                                                        DB_PASSWORD="mot de passe de la db"

## 5) Pour les autres dépendances voir la doc : 
    
    "mssql", "multer", "sequelize", "yup", 
    "validators", "express-async-errors", 
    "jsonwebtoken".


                                    
## 6) Initialiser un serveur.js avec express : 

    creer un fichier serveur.js dans le dossier source Back End.
    dans le fichier serveur.js ajouter le paramètre 
    --> require ("dotenv").config(); 
    "ce paramètre va utiliser la la dépendance du dossier node module afin d'utiliser les données de la DB(DataBase) du fichier .env"