"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5298843e",
  "path": "/dev/html_css/sass.html",
  "title": "Le préprocesseur Saas",
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
      "title": "Utilisation",
      "slug": "utilisation",
      "children": [
        {
          "level": 3,
          "title": "Imbrication",
          "slug": "imbrication",
          "children": []
        },
        {
          "level": 3,
          "title": "L'héritage",
          "slug": "l-heritage",
          "children": []
        },
        {
          "level": 3,
          "title": "Les variables",
          "slug": "les-variables",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Sources",
      "slug": "sources",
      "children": []
    }
  ],
  "filePathRelative": "dev/html_css/sass.md",
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

/***/ 5901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sass_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/html_css/sass.html.vue?vue&type=template&id=396a04b9



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="le-preprocesseur-saas" tabindex="-1"><a class="header-anchor" href="#le-preprocesseur-saas" aria-hidden="true">#</a> Le préprocesseur Saas</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>C&#39;est un outil très pratique qui permet de rédiger du code CSS plus évolué.</p><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><h3 id="imbrication" tabindex="-1"><a class="header-anchor" href="#imbrication" aria-hidden="true">#</a> Imbrication</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.table</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

    <span class="token selector">tr</span><span class="token punctuation">{</span>
       <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token selector">th</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn</span><span class="token punctuation">{</span>
    <span class="token selector">p</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="l-heritage" tabindex="-1"><a class="header-anchor" href="#l-heritage" aria-hidden="true">#</a> L&#39;héritage</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token selector">.call</span><span class="token punctuation">{</span>
    @extends .btn
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>css utilisable au besoin</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">%btn</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ce btn là peu être appelé dans une class puis compilé mais par défaut le code qu&#39;il contient n&#39;est pas compilé.</p><h3 id="les-variables" tabindex="-1"><a class="header-anchor" href="#les-variables" aria-hidden="true">#</a> Les variables</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>\$<span class="token property">padding</span> <span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

<span class="token selector">.btn</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> \$padding<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>import de fichiers scss</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;mon_fichier&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h2><ul><li><a href="https://www.youtube.com/watch?v=tnmGdg46LnM&amp;list=PLjwdMgw5TTLWVp8WUGheSrGnmEWIMk9H6&amp;index=5" target="_blank" rel="noopener noreferrer">Graphiart: Le préprocesseur SASS`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/html_css/sass.html.vue?vue&type=template&id=396a04b9

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/html_css/sass.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\html_css\\sass.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const sass_html = (script);

/***/ })

};
;
//# sourceMappingURL=688.app.js.map