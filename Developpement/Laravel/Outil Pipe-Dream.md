# Notes de parcours

## Etapes

1. Créer un projet laravel

    ```php
     composer create-project --prefer-dist laravel/laravel ykQuotes
    ```

2. Installer la librairie pipedream

 Activer la dépendance file info dans le fichier php.ini.

    ```php
       composer require --dev pipe-dream/laravel
    ```

3. lancer le serveur web [Lien](http://localhost:8000/pipe-dream)

### Configuration de laravel

1. Générer la clé

    ```php
        php artisan key:generate
    ```

2. s