# Flexbox

## Créer un container

```html
<div class="container">
    <div class="box"> Box 1 </div>
    <div class="box"> Box 2 </div>
    <div class="box"> Box 3 </div>
</div>
```

```css
.container{
    display: flex;
    /* align-items: center; Alignement vertical */ 
    /* flex-direction: column; */
}

.box{
    flex: 1;
    /* order: 1; Changer l'ordre */
}
```