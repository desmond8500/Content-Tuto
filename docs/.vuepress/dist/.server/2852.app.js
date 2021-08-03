"use strict";
exports.id = 2852;
exports.ids = [2852];
exports.modules = {

/***/ 187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-74c3ba00",
  "path": "/dev/angular/Array.html",
  "title": "Array Methods",
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
      "title": "Filter",
      "slug": "filter",
      "children": []
    },
    {
      "level": 2,
      "title": "Map",
      "slug": "map",
      "children": []
    },
    {
      "level": 2,
      "title": "Find",
      "slug": "find",
      "children": []
    },
    {
      "level": 2,
      "title": "Foreach",
      "slug": "foreach",
      "children": []
    },
    {
      "level": 2,
      "title": "Some",
      "slug": "some",
      "children": []
    },
    {
      "level": 2,
      "title": "Reduce",
      "slug": "reduce",
      "children": []
    },
    {
      "level": 2,
      "title": "Includes",
      "slug": "includes",
      "children": []
    }
  ],
  "filePathRelative": "dev/angular/Array.md",
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

/***/ 2054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Array_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/Array.html.vue?vue&type=template&id=7554dbf1



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="array-methods" tabindex="-1"><a class="header-anchor" href="#array-methods" aria-hidden="true">#</a> Array Methods</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Methodes utiles pour traiter les tableaux en javascript.<br><a href="https://www.youtube.com/watch?v=R8rmfD9Y5-c" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;bike&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;tv&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;album&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;compter&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;keyboard&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2><p>Permet de filter le contenu d&#39;un tableau dans un autre tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> filteredItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>price <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filteredItems<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Il ne va retourner que des champs dont le prix est inférieur ou égal à 100.</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>Permet de convertir un tableau en autre tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> itemNames <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>price<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>itemNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Il ne récupère que la liste des prix.</p><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> Find</h2><p>Permet de trouver un objet dans un tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foundItem <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&#39;Book&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>itemNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> Foreach</h2><p>Permet de parcourir un tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Affiche chaque élément du tableau.</p><h2 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> Some</h2><p>Permet de vérifier si un certain type d&#39;éléments existe dans un tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> inexpensiveItem <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>price <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inexpensiveItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Retourne true ou false.</p><h2 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> Reduce</h2><p>Permet de faire des sommes d&#39;éléments d&#39;un tableau.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> total <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sousTotal<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>price <span class="token operator">+</span> sousTotal<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Retourne true ou false.</p><h2 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> Includes</h2><p>Permet de vérifier si un élément existe dans un tableau, c&#39;est une version simplfiée de find;</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> includesTwo <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">icludes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>includesTwo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Array.html.vue?vue&type=template&id=7554dbf1

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Array.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\Array.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Array_html = (script);

/***/ })

};
;
//# sourceMappingURL=2852.app.js.map