# DevOps Examen janvier 2026

## Informations Étudiant
* **Nom :** El-Karouni
* **Prénom :** Rayan
* **Email Vinci :** rayan.elkarouni@student.vinci.be

## Projet
* **URL GitHub :** https://github.com/rayan-elkarouni-vinci/IPL-social

## Description
Ce projet implémente une bibliothèque de validation d'email en TypeScript, développée en suivant la méthodologie TDD (Test Driven Development). Le projet est intégré dans un pipeline CI via GitHub Actions qui exécute automatiquement les tests à chaque modification dans le main.

## Règles de validation implémentées
Conformément à l'énoncé, la fonction valide :
* La présence d'un '@'.
* La présence de texte avant et après le '@'.
* L'absence d'espaces.
* La présence d'un point dans le domaine (qui n'est pas le dernier caractère).
Tout ceci sans utiliser de bibliothèques externes.

## Comment lancer les tests
Pour exécuter la suite de tests, utilisez la commande suivante à la racine du projet :

1. npm install
2. npm test