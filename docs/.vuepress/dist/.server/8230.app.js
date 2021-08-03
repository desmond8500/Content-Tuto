"use strict";
exports.id = 8230;
exports.ids = [8230];
exports.modules = {

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7ac03095",
  "path": "/dev/laravel/04%20Api.html",
  "title": "Laravel : RESTfull API avec Laravel",
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
      "title": "Installation",
      "slug": "installation",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "Header",
          "slug": "header",
          "children": []
        },
        {
          "level": 3,
          "title": "Création de l'API",
          "slug": "creation-de-l-api",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/laravel/04 Api.md",
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

/***/ 7688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _04_Api_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/04 Api.html.vue?vue&type=template&id=47b4acf2



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-restfull-api-avec-laravel" tabindex="-1"><a class="header-anchor" href="#laravel-restfull-api-avec-laravel" aria-hidden="true">#</a> Laravel : RESTfull API avec Laravel</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><ol><li>Créer un projet Laravel</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefert-dist laravel/laravel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Les headers permettent à angular d&#39;accéder aux ressources de laravel, vu qu&#39;ils ne sont pas dans le même domaine.<br> Il faut l&#39;ajouter au début du fichier <strong>/public/index.php</strong><br> Cette méthode n&#39;est toute fois pas compatibles avec les test unitaires, il faut utiliser les middlewares à la place.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Access-Control-Allow-Origin: *&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Access-Control-Allow-Credentials: true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Access-Control-Max-Age: 1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://www.sshakil.com/blog/article/7/Enabling-CORS-for-Laravel-requested-by-Angular" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="creation-de-l-api" tabindex="-1"><a class="header-anchor" href="#creation-de-l-api" aria-hidden="true">#</a> Création de l&#39;API</h3><p>Création du controlleur</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:controller TestController --api
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/04 Api.html.vue?vue&type=template&id=47b4acf2

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/04 Api.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\04 Api.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _04_Api_html = (script);

/***/ })

};
;
//# sourceMappingURL=8230.app.js.map