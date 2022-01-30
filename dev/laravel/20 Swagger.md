# Documentation Avec Swagger

## Description

Développer une API exige de disposer d’une documentation ordonnée et compréhensible. Elle seule permet aux développeurs de se servir d’une interface. C’est encore plus vrai pour les API publiques : sans documentation, elles sont inutilisables pour la communauté, ne sont pas complétées et ne rencontrent aucun succès.

À l’heure actuelle, Swagger est la meilleure solution pour documenter une API REST, car le système est capable de représenter presque tous les services Web et informations ayant trait à l’interface. La documentation évolue en même temps que le système et enregistre automatiquement les modifications. Swagger se montre particulièrement efficace pour parvenir à ce résultat parce qu’il consigne la documentation d’une API REST directement dans son code.

[Source](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/quest-ce-que-swagger/)

## Installation

Installer Swagger

```bash
composer require "darkaonline/l5-swagger"
```

Publier Swagger

```bash
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

[source](https://www.kaherecode.com/tutorial/comment-documenter-son-api-laravel-via-openapi-swagger)

## Personnaliser l'interface

Ajouter dans le fichier `Controlleur.php`

```php
 /**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Api covid19 Documentation",
 *      description="Implementation of Swagger with in Laravel",
 *      @OA\Contact(
 *          email="admin@admin.com"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *      )
 * )
 *
 * @OA\Server(
 *      url=L5_SWAGGER_CONST_HOST,
 *      description="Demo API Server"
 * )

 *
 *
 */
```

## Publier la documentation

```bash
php artisan l5-swagger:generate
```
