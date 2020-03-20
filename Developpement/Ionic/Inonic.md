# Ionic 4

## Description
 Ionic est un framework qui permet de générer un code multisupport en utilisant le HTML, le CSS, et angular, afin de générer des applications iOS, Android.
 La documentation officielle est disponle [ici](https://ionicframework.com/docs)

## Prérequis
### NodeJS
Pour pouvoir créer un projet ionic il faut installer la dernière version [NodeJS](https://nodejs.org/en/download/).  
Pour vérifier la version dont vous disposez vous pouver utiliser les commandes suivantes sur un terminal :
```
node -v
npm -v
```
NPM est un gestionaire de dépendances qui est intallé avec NodeJS. Vous pouvez eventuellement le mettre à jour en utilisant la commande.
```
npm install -g npm@latest
```

### Android Studio
Il est utile d'installer [android studio](https://developer.android.com/studio/?gclid=CjwKCAiAhp_jBRAxEiwAXbniXYTniRjkZzlVvi8YcE_KaYf4bEAnrSF0klo-NkRdgk99uw8fX5l4kBoCmT0QAvD_BwE) pour pouvoir déployer son projet sous android.

### Editeur de texte ou IDE

Il faut un éditeur de texte ou un IDE pour faire le develoopement. Je vous recommande [Atom](https://atom.io/) qui est un excellent éditeur de texte et [Visual Studio Code](https://code.visualstudio.com/download) qui est très utilisé actuellement et qui a l'avantage de proposer une autocomplétion plus poussée.

### GIT
[GIT](https://git-scm.com/) est un outil de versionning assez performant et insdispensable pour tout developpeur. Il permet :
- de revenir sur des versions antérieures du projet
- d'avoir un historque de l'évolution
- de pouvoir tester des fonctionnalités sur des branches parrallèles avant de les appliquer sur la branche principale
- de stocker le projet en ligne (github, gitlab, bitbucket)
- etc
Git s'utilise en ligne de commande, je vous conseille toutefois d'utiliser le client GIT [GitKraken](https://www.gitkraken.com/git-client) qui est assez pratique et performant.

## Installation
La commande suivante permet d'installer ionic de manière globale
```
npm install -g ionic
```
Pour démarrer nouveau projet il est possible de choisir un des trois templates préconçus:
* **blank** = projet vide
* **tabs** = projet avec des onglets
* **sidemenu** = projet avec un sidemenu

La commande ci dessous permet de créer un projet avec un sidemenu
```
ionic start monProjet tabs
```
Vous pouvez aussi faire juste :
```
ionic start
```
Il suffit juste de suivre les instructions par la suite.

Pendant l'intallation le système vous posera la question suivante :   
Install the free Ionic Appflow SDK and connect your app? (Y/n)  
il faudra repondre (n)


Une fois l'intallation fini il suffit de se déplacer dans le dossier du projet et de le lancer.
```
cd monProjet
ionic serve
```

Votre projet se lancera automatiquement sur votre navigateur favoris. Il se rechargera automatiquement lorsque vous ferez des sauegardes.  

Vous pouvez choisir d'utiliser l'interface d'ionic lab qui vous permettra d'avoir le rendu de votre application sur plusieurs supports (IOS, Android, Windows Mobile).
Il suffit de lancer la commande suivante et le système vous demandera de l'intaller si ce n'est pas déja fait avant de le lancer.
```
ionic serve -l
```

## Déploiement sur Android
Installer dans un premier temps cordova
```
npm install -g ionic cordova
```
Publier pour android
```
ionic cordova build --release android
```

## Theming
Il faut mettre à jour le fichier **src/theme/variables.scss**.
Cela peut se faire plus facilement avec le générateur de palette d'ionic disponible [ici](https://ionicframework.com/docs/theming/color-generator)

azkfhgjjytazfjtyazefgze
