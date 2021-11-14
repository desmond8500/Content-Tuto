# Laravel : Laravel 8

## Projet laravel simple

Créer le projet Laravel :

```sh
composer create-project laravel/laravel example-app
touch database/database.sqlite
```

Il faudra modifier le fichier de configuration `.env` pour utiliser la base sqlite:

```sh
DB_CONNECTION=sqlite
```

```sh
php artisan migrate
```
