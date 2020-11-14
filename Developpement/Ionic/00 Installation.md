# Ionic 5

## Installation

1. Installer ionic de manière globale
  ```bash
   npm install -g @ionic/cli
  ```
2. Créer une application
  ```bash
    ionic start
  ```
3. Lancer le projet
  ```bash
    cd nom_projet
    ionic serve
  ```
## Déploiement

1. Déploiement WEB

    ```bash
    ionic build --prod
    ```

    Le projet est exporté dans un dossier __www__.  
    Il suffit juste d'envoyer le contenu de ce dossier vers un serveur. 
