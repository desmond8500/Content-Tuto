"use strict";
exports.id = 8575;
exports.ids = [8575];
exports.modules = {

/***/ 4820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-56f3dc72",
  "path": "/dev/laravel/07%20Eloquent.html",
  "title": "Laravel : Base de donnée avec Eloquent",
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
      "title": "Stocker des données",
      "slug": "stocker-des-donnees",
      "children": []
    },
    {
      "level": 2,
      "title": "Requete like",
      "slug": "requete-like",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/07 Eloquent.md",
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

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _07_Eloquent_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/07 Eloquent.html.vue?vue&type=template&id=4a51fb44

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-base-de-donnee-avec-eloquent" tabindex="-1"><a class="header-anchor" href="#laravel-base-de-donnee-avec-eloquent" aria-hidden="true">#</a> Laravel : Base de donnée avec Eloquent</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="stocker-des-donnees" tabindex="-1"><a class="header-anchor" href="#stocker-des-donnees" aria-hidden="true">#</a> Stocker des données</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// validation</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Ajout du commentaire</span>
<span class="token class-name static-context">Comment</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span>      <span class="token operator">=&gt;</span>  <span class="token string double-quoted-string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;password&quot;</span>  <span class="token operator">=&gt;</span>  <span class="token string double-quoted-string">&quot;passer&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="requete-like" tabindex="-1"><a class="header-anchor" href="#requete-like" aria-hidden="true">#</a> Requete like</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">search</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">\$request</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">\$articles</span> <span class="token operator">=</span> <span class="token class-name static-context">Stock_article</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;designation&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token property">article</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span>
                        <span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;LIKE&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">\$searchTerm</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span> 
                        <span class="token operator">-&gt;</span><span class="token function">paginate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">,</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;articles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/07 Eloquent.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\07 Eloquent.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _07_Eloquent_html = (script);

/***/ })

};
;
//# sourceMappingURL=8575.app.js.map