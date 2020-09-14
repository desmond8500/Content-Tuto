# VUE JS : Emit

## Description

Permet d'envoyer en évènement d'un composant fils vers un composant parent.

## Code 

Coté Child:

```js
methods: {
    store(){
        axios.post('http://localhost:8000/api/clients',{
            compte_id:      this.compte_id,
            nom:            this.nom,
            description:    this.description,
            adresse:        this.adresse
        })
        .then(response => console.log(response))
        .then(response => this.$emit('task-added',response))
        .catch(error => console.log(error));
        this.dismiss = false;
    },
}
```

Coté parent

```vue
<template>
    <div>
        <client-add @task-added="refresh"></client-add>
    </div>
</template>
<script>
    methods: {
        getResults(page = 1) {
            axios.get('http://localhost:8000/api/clients?page=' + page)
                .then(response => {
                    this.clients = response.data;
                });
        },
        refresh(clients){
            this.getResults();
        }
    }
</script>

```

## Methode 2

dans le coposant fils

```html
<template>
    <div>
        <button class='btn btn-primary' @click="$emit('chosenItem', value)">
            {{item}}
        </button>
    </div>
</template>
<script>
    export default {
        name: 'child',
        props: ['list']
    }
</script>
```

Dans le composant parent 

```html
<template>
    <child  :list='listdata' @chosenItem="getItem"/>
</template>
<script>
    import child from './child.vue';
    export default {
        name: 'parent',
        components: [ 
            child
        ]
        data() {
            return {
                listdata: {
                    name: 'naruto',
                    grade: 'junin'
                },
                myvalue: ''
            }
        },
        methods:{
            getItem(value){
                this.myvalue = value;
            }
        }
    }
</script>
```

