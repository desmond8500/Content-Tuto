# Laravel : Routage

## Description
Gestion des la navigation.

## Utilisation

Dans le fichier *routes/web.php* il faut créer la route avec le nom.

```php
Route::get('fichier/{arg?}', 'IndexController@index')->name('index');
```
La route que nous avons crée :

* fichier = chemin
* arg = argument facultatif

Et dans un fichier blade nous utilisons le code suivant pour créer un lien avec un argument:

```html
<a href="{!! route ('index',['arg' => 'arg']) !!}">Mon lien</a>
```

## Routes

### Route avec une fonction

```php
Route::get('users/{id}', function ($id) {
});
``` 

### Route avec une vue

```php
Route::view('URI', 'viewName');
```

### Route avec un controlleur

```php
Route::get('users/{id}', 'Controller@method');
```

### Route avec une nom

```php
Route::view('URI', 'viewName')->name('nom');

