# Prise en main

## Installation

1. Télécharger et installer NodeJS pourrdisposer de node et de npm
1. Installer **Angular CLI**

  ```bash
  npm install -g @angular/cli
  ```

1. Créer un nouveau projet

  ```bash
  ng new nomProjet
  cd nomProjet
  ```

1. Lancer le server intégré

  ```bash
  ng serve
  ```

1. Lancer la page [Lien](http://localhost:4200/)

* [Source](https://angular.io/cli)
  
## Installation d'NgBootstrap

Les scripts js ne marchent pas forcément avec angular il est donc préférable d'utiliser NGBootstrap pour dynamiser le code.

```console
ng add @ng-bootstrap/ng-bootstrap
```

## Intégration d'un template

Pour intégrer un template il faudra ajouter les fichiers CSS au projet soit :  

* En important les fichiers css dans le fichier `styles.css` en faisant un import
  
```css
    @import '~bootstrap/scss/bootstrap';
```

* Soit en l'ajoutant dans le tableau styles du fichier `package.json`

* [Source](https://ng-bootstrap.github.io/#/home)

## Personnalisation

Il faudra utiliser le fichier `index.html` pour définir la structure de base de la page et `app` pour gérer la partie dynamique.

## Créer des composants

Dans la console faire :

```console
ng g c nomDuComposant
```

et pour appeler le composant il suffit de faire :

```html
<app-nomDuComposant></app-nomDuComposant>
```

## Routage

Dans le fichier `app-routingmodule.ts` il fudra ajouter les pages dans la constante ``routes``.

```javascript
const routes: Routes = [
  { path: '',   redirectTo: 'index', pathMatch: 'full' },
  { path:'index', component: IndexComponent },
  { path:'settings', component: SettingsComponent },
];
```
