#!/bin/bash
echo "Veuillez choisir un nom de projet :"
read nom_projet
if [ -d $nom_projet/ ]
then
echo "Le nom du projet existe déjà" 
else
mkdir ./$nom_projet
cd "./$nom_projet" || { echo "Échec du changement de répertoire"; exit 1; }

touch index.html style.css script.js

echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer/>
    <link rel="stylesheet" href="style.css" />
    <title>' > index.html

echo "$nom_projet" >> index.html

echo '</title>
</head>
<body>
    
</body>
</html>' >> index.html
fi
