# Flexbox

## Description


## Centrer du contenu

```html
<div class="container">
   <div class="block">
      Lorem ipsum
   </div>
</div>
```

```css
.container {
   display: flex;
   justify-content: center;
}
```

## Afficher des éléments équitablement répartis 

```html
 <div class="card-body bod" >
    <div class="number" v-for="item in list" :key="item.id">
        <div class="text-center">
            <i :class="item.icon"></i>
        </div>
        <div>
            {{ item.name }}
        </div>
    </div>
</div>
```

```css
.bod{
        display: flex;
        justify-content: space-between;
        background: blueviolet;
        color: white;
        border: 3px solid black;
    }
.number{
    border: 3px solid black;
    padding: 15px;
    border-radius: 50px;
}
```

![sdfsd]('./img1.png')


## Sources

* [Center](https://www.design-fluide.com/02-08-2018/centrer-horizontalement-flexbox/)
