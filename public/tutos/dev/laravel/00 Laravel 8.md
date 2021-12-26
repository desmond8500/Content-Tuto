# Laravel : Laravel 8

## Description

Laravel est un framework PHP créé par Taylor Otwell.

## Prérequis

* [PHP](https://www.php.net/downloads)
* [Composer](https://getcomposer.org/download/) (Composer est un gestionaire de dépendance)
* [Visual Studio code](https://code.visualstudio.com/download) (Est un éditeur de texte)
* [Laragon](https://laragon.org/download/) (Serveur http, de base de donnée très performant)

## Projet laravel simple

Créer le projet Laravel :

```sh
composer create-project laravel/laravel example-app
cd example-app
touch database/database.sqlite
```

Il faudra modifier le fichier de configuration `.env` pour utiliser la base sqlite:

```sh
DB_CONNECTION=sqlite
```

```sh
php artisan migrate
```

Lancer le projet

```shell
php artisan serve
```

## Utiliser un autre port

```bash
php artisan serve --port 8001
```

## Outils 

### Modélisation de la base de donnée

Pour modélier votre base de donnée vous pouvez utilier [Laravel Schema Designer](https://www.laravelsd.com/) pour le faire plus facilement. En plus ce site vous permet: 
* de sauvegarder vos modèles de données
* de partager vos modèles de données
* de générer les controlleurs, les modèles et les migrations

### Administration

#### Infyom Laravel Generator

C'est un puissant outil qui permet de générer très rapidement des CRUDs, des APIs, des tests unitaires et une documentation avec Swagger. 
Il vous permet de gérer tout cela avec un backoffice qui utilise le theme CoreUI ou adminlte2.

Le répo git: 
```shell
git clone https://github.com/InfyOmLabs/coreui-generator.git mon_projet
```

[Site](https://labs.infyom.com)

### Front End Vue JS

Le front end d'une application laravel peut être faite avec du blade ou avec Vue JS. L'avantage d'utiliser VueJS c'est que l'on peut créer des Single Page Applications (SPA) qui sont plus rapides et plus dynamiques.

```shell
composer require laravel/ui
php artisan ui vue
npm 

```

## Librairies à tester

* [Handesk](https://github.com/BadChoice/handesk?ref=LaravelCollections.com), gestion de tickets
* [Goodwork](https://github.com/iluminar/goodwork?ref=LaravelCollections.com), Gestion de tache
* [Budget](https://github.com/range-of-motion/budget?ref=LaravelCollections.com), gestion financière 
* [akaunting](https://github.com/akaunting/akaunting), gestion de devis et autre
* [Laravel Talk](https://github.com/nahid/talk?ref=LaravelCollections.com),tchat en ligne
