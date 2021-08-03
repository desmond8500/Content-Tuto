"use strict";
exports.id = 5253;
exports.ids = [5253];
exports.modules = {

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f046fb90",
  "path": "/dev/laravel/15%20Relations.html",
  "title": "Laravel : Relations",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Description",
      "slug": "description",
      "children": []
    },
    {
      "level": 2,
      "title": "Relation One to one",
      "slug": "relation-one-to-one",
      "children": [
        {
          "level": 3,
          "title": "Modèle user",
          "slug": "modele-user",
          "children": []
        },
        {
          "level": 3,
          "title": "Modèle tel",
          "slug": "modele-tel",
          "children": []
        },
        {
          "level": 3,
          "title": "Utilisation",
          "slug": "utilisation",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Relation One to many",
      "slug": "relation-one-to-many",
      "children": [
        {
          "level": 3,
          "title": "Modèle user",
          "slug": "modele-user-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Modèle tel",
          "slug": "modele-tel-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Utilisation",
          "slug": "utilisation-1",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/laravel/15 Relations.md",
  "git": {
    "updatedTime": 1627849147000,
    "contributors": [
      {
        "name": "kratos",
        "email": "desmond8500@gmail.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 7910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _15_Relations_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/15 Relations.html.vue?vue&type=template&id=0a39a930

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-relations" tabindex="-1"><a class="header-anchor" href="#laravel-relations" aria-hidden="true">#</a> Laravel : Relations</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Nous allons illustrer l&#39;usage des relations des bases de données avec eloquent.<br> Nous allons utiliser les tables suivantes:</p><p>User : prenom, nom Tel: numero</p><h2 id="relation-one-to-one" tabindex="-1"><a class="header-anchor" href="#relation-one-to-one" aria-hidden="true">#</a> Relation One to one</h2><p>Un utilisateur a un numéro de téléphone.</p><h3 id="modele-user" tabindex="-1"><a class="header-anchor" href="#modele-user" aria-hidden="true">#</a> Modèle user</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Models\\Tel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="modele-tel" tabindex="-1"><a class="header-anchor" href="#modele-tel" aria-hidden="true">#</a> Modèle tel</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Models\\User&#39;</span><span class="token punctuation">,</span> &#39;id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tel</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">tel</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="relation-one-to-many" tabindex="-1"><a class="header-anchor" href="#relation-one-to-many" aria-hidden="true">#</a> Relation One to many</h2><p>Un utilisateur peux avoir plusieurs numéros de téléphones.</p><h3 id="modele-user-1" tabindex="-1"><a class="header-anchor" href="#modele-user-1" aria-hidden="true">#</a> Modèle user</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Models\\Tel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="modele-tel-1" tabindex="-1"><a class="header-anchor" href="#modele-tel-1" aria-hidden="true">#</a> Modèle tel</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Models\\User&#39;</span><span class="token punctuation">,</span> &#39;id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="utilisation-1" tabindex="-1"><a class="header-anchor" href="#utilisation-1" aria-hidden="true">#</a> Utilisation</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tel</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">tel</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/15 Relations.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\15 Relations.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _15_Relations_html = (script);

/***/ })

};
;
//# sourceMappingURL=5253.app.js.map