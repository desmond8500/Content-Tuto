# Navigation

Gestion de la lavigation entre les pages

## Navigation via des liens

```htm
<a routerlink="/lien">Lien</a>
```

## Navigation dynamique

Fichier typescript

```javascript
this.route = '/search';
this.routeName = 'Search';
```

Fichier HTML

```htm
<a [routerLink]="route">{{ routeName }}</a>
```

## Navigation dynamique avec des paramètres

```htm
<a [routerLink]="['/books', book.id]">{{ routeName }}</a>
```

## Router service

```javascript
constructor(public route: Router) { }
go(){
    this._router.navigate(['/books', bookId], {queryParams: {}})
}
```

## Source

* [Marmicode](https://guide-angular.wishtack.io/angular/routing/mise-en-place-du-routing)
