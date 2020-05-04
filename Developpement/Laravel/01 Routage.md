# Routage laravel

## Description


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

## Retourner une vue

```php
Route::view('/login', 'pages.login');
```
