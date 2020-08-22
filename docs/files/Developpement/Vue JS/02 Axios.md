# Axios

## Description

```js
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
      .catch(error => console.log(error))
  }
})
```

```html
<div id="app">
  {{ info }}
</div>
```

## Vue Project 

Dans un projet Vue il faut importer axios pour l'utiliser dans un composant.

```js
const axios = require('axios').default;
```