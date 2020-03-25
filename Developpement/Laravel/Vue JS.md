# Vue JS et Laravel

## Description

Vue JS est un framework javascript très populaire qui peut être facilement intégré à un projet web.

## Installation

Avec la version 6 de Laravel il faut installer VueJS avec composer il n'est pas intégré de base 

```bash
composer require laravel/ui:^1.0 --dev
php artisan ui vue
npm install
npm run watch
```

il faut ensuite ajouter vue au projet 

```html
<link href="{{ asset('css/app.css')}} ">

<body>
    <div id="app">
        <example-component></example-component>
    </div>
</body>

<script href="{{ asset('/js/app.js')}} ">
```

[Source](https://laravel.com/docs/6.x/frontend#writing-vue-components)

## Composants

### Composant de base

Le template doit toujours commencer avec une div de base

```html
<template>
    <div class="container">
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },

        data(){
            return {
                message: "hello"
            }
        }
    }
</script>
```

### Créer un composant

### Binding

```html
<input v-model="name">
```

### Boucle

```html
<div v-for="comment in comments">
    {{ comment }}
</div>
```

### Envoi et receoption de données

Envoi
```html
<form #submit.prevent="send">
    <button type="submit"> Valider </buttun>
</form>
```

```js
send(){
    axios.post('/url',{
        message: 'My message'
    })
}
```

reception
Avec blade on récupère les données que l'on passe au js
```php
<div-component :comments="{{ $comments }}" >
</div-component>
```
Ensuite dans la partie js il faut déclarer la variable à traiter
```js
export default{
    props: ['comments'],
    data(){
        return{
            comment: '',
        }
    }
}
```