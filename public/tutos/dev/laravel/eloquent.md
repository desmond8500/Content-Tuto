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

## Methodes

Le générateur de requêtes fournit également une variété de méthodes pour récupérer des valeurs agrégées telles que **count**, **max**,**min**, **avg** et **sum**. Vous pouvez appeler l'une de ces méthodes après avoir construit votre requête :

```php
$users = DB::table('users')->count();

$price = DB::table('orders')->max('price');
```

[Source](https://laravel.com/docs/8.x/queries#aggregates)
