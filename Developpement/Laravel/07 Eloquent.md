# Base de donnée avec Eloquent

## Description


## Stocker des données

```php
// validation
request()->validate([
    'content'=>['required'],
]);

// Ajout du commentaire
Comment::create(
    "name"      =>  "test",
    "password"  =>  "passer"
);
```