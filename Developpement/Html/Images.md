# Image

## Ecommerce article

Code HTML

```html
<div class="col-md-3 border bg-dark">
    <div class="bg-dark rounded">
        <a href="{ { asset($folder) }}" data-lightbox="image-1" data-title="My caption">
            <img src="{ { asset($folder) }}" class="article-img"  alt="{ { asset($folder) }}">
        </a>
        <p class="text-center text-white">Mouyt</p>
    </div>
</div>
```
Code CSS

```css
.article-img{
    height: 150px;
    display: block;
    margin: auto;
    background-color: aqua;
    margin-top: 10px;
}
```

<div class="col-md-3 border bg-dark">
    <div class="bg-dark rounded">
        <a href="{ { asset($folder) }}" data-lightbox="image-1" data-title="My caption">
            <img src="{ { asset($folder) }}" class="article-img"  alt="{ { asset($folder) }}">
        </a>
        <p class="text-center text-white">Mouyt</p>
    </div>
</div>
