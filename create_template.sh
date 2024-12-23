#!/bin/bash
echo "Veuillez choisir un nom de projet :"
read nom_projet
if [ -d "$nom_projet"/ ]
then
  echo "Le nom du projet existe déjà" 
else
  mkdir "./$nom_projet"
  cd "./$nom_projet" || { echo "Échec du changement de répertoire"; exit 1; }


  touch index.html style.css script.js .gitignore package.json

  echo '{
    "devDependencies": {
      "vite": "^5.4.11"
    },
    "scripts": {
      "dev": "vite --open --clearScreen false"
    }
  }
  '>> package.json

  echo "/node_modules/" >> .gitignore

  echo "body {
    margin: 0;
    box-sizing: border-box;
  }">> style.css

  echo "<!DOCTYPE html>
  <html lang='en'>
  <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <script type='module' src='script.js' defer> </script>
      <link rel='stylesheet' href='style.css' />
      <title>${nom_projet^}</title>
  </head>
  <body>
      
  </body>
  </html>" >> index.html

  echo "Dossier crée avec succès"
  echo "Installation des dépendances..."

  if ! npm install; then
      echo "Erreur lors de l'installation des dépendances :("
      exit 1
  fi

  echo "" 
  echo "Dépendances installées."
  echo "" 
  echo "Lancement du serveur !"


  if ! npm run dev ; then
      echo "Erreur lors du lancement du serveur de développement ;_;"
      exit 1
  fi


fi
