# Laravel Crud

## Modèles et controlleurs

### Création des modèles et des fichiers de migration

Le drapeau ```-m``` ou ```-migration``` permet de créer en même temps le fichier de migration. Il portera le nom du model en minuscule avec le s à la fin.  

Dans le fichier modèle :

```php
  protected $fillable = [
    'share_name',
    'share_price',
    'share_qty'
  ];
```

## Création des fichiers

```php
php artisan make:model Model -mcr
```

où :

* m = migrations
* c = controlleur
* r = ressources
