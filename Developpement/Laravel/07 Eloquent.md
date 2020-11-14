# Laravel : Base de donnée avec Eloquent

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

## Requete like 

```php
public function search(Request $request){
    $articles = Stock_article::where('designation', 'like', "%{$request->article}%")
                        ->orWhere('email', 'LIKE', "%{$searchTerm}%") 
                        ->paginate(10);

    return view('index',compact('articles'));
}
```
