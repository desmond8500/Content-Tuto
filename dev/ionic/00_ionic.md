# Ionic 6

## Description

Ionic est un framework qui permet de develloper des applications mobiles avec des technologies web.

## Prérequis

Pour utiliser ionic il faut télécharger et  installer [Node JS](https://nodejs.org/en/download/) au préalaible.

Nous vous recommandons d'utiliser l'éditeur de texte [Visual Studio Code](https://code.visualstudio.com/download).

## Installation

```console
npm install -g @ionic/cli
```

## Créer un projet

```console
ionic start
```

## Lancer une application

Lancement normal

```console
ionic serve
```

Par défaut le projet est lancé sur le port [8100](http://localhost:8100/)  

Lancement avec `Ionic Lab`. Ionic lab permet d'avoir un aperçu plus fidèle du rendu de l'application pour les téléphones android et Ios.

```console
ionic serve -l
```

Par défaut le projet est lancé sur le port [8200](http://localhost:8200/)

## Générer des fonctionalités

```console
ionic generate
```

## Créer une page

```console
ionic g page "page name"
```

## Déploiement

Configuration avec capacitor

```console
ionic capacitor add android
```

Lancement du projet avec capacitor

```console
ionic capacitor copy android
```

## Source

* [Installation](https://ionicframework.com/docs/intro/cli)
