# Laravel : Base de donnée avec Eloquent

## Description

## Softdeletes

Dans le modèle :

```php
use Softdeletes;
```

Dans la migration

```php
$table->softDeletes();
```

## Requete like

```php
public function search(Request $request){
    $articles = Stock_article::where('designation', 'like', "%{$request->article}%")
                                ->orWhere('email', 'LIKE', "%{$searchTerm}%") 
                                ->paginate(10);

    return view('index',compact('articles'));
}
```

Requettes avancées

```php
// searching a single column
User::whereLike('name', $searchTerm)->get();

// searching multiple columns in one go
User::whereLike(['name', 'email'], $searchTerm)->get();
```

```php
User::query()
   ->where('name', 'LIKE', "%{$searchTerm}%") 
   ->orWhere('email', 'LIKE', "%{$searchTerm}%") 
   ->get();
```

```php
Post::whereLike(['name', 'text', 'author.name', 'tags.name'], $searchTerm)->get();
```


[Source](https://freek.dev/1182-searching-models-using-a-where-like-query-in-laravel)

## Methodes

Le générateur de requêtes fournit également une variété de méthodes pour récupérer des valeurs agrégées telles que **count**, **max**,**min**, **avg** et **sum**. Vous pouvez appeler l'une de ces méthodes après avoir construit votre requête :

```php
$users = DB::table('users')->count();

$price = DB::table('orders')->max('price');
```

[Source](https://laravel.com/docs/8.x/queries#aggregates)
