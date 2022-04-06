# Migrator

## Description

Migrator est une librairie qui permet de gérer les migrations avec une interface graphique

## Installation

```bash
composer require rezaamini-ir/migrator
php artisan vendor:publish --tag=migrator-config
```

Il est utile de faciliter l'accès à l'interface en utilisant le lien /migrator en modifiant le fichier de confifuration :

```php
 /*
    |--------------------------------------------------------------------------
    | Middlewares for Migrator
    | Middlewares which are used to access Migrator route
    |--------------------------------------------------------------------------
    */
    'middleware' => 'web',
```

## Source

[Migrator](https://github.com/rezaamini-ir/migrator)
