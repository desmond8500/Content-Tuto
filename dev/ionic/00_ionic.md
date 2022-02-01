# Ionic 6

## Description

Ionic est un framework qui permet de develloper des applications mobiles avec des technologies web.

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

Lancement avec `Ionic Lab`

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