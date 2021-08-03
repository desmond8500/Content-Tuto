"use strict";
exports.id = 3716;
exports.ids = [3716];
exports.modules = {

/***/ 3107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f1d9d8d0",
  "path": "/dev/laravel/08%20Intervention%20Image.html",
  "title": "Laravel : Intervention Image",
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
      "title": "Utilisation",
      "slug": "utilisation",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/08 Intervention Image.md",
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

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _08_Intervention_Image_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/08 Intervention Image.html.vue?vue&type=template&id=209712ba



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-intervention-image" tabindex="-1"><a class="header-anchor" href="#laravel-intervention-image" aria-hidden="true">#</a> Laravel : Intervention Image</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Ici nous avons regroupé un ensemble de librairie utiles pour gérer des images dan un projet Laravel</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require intervention/image
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Ajouter dans le fichier <code>config/app.php</code></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Intervention<span class="token punctuation">\\</span>Image<span class="token punctuation">\\</span>ImageServiceProvider</span><span class="token operator">::</span><span class="token keyword">class</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Ainsi que l&#39;alias</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;Image&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Intervention<span class="token punctuation">\\</span>Image<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token keyword">class</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>puis publiez</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> php artisan vendor:publish --provider<span class="token operator">=</span><span class="token string">&quot;Intervention\\Image\\ImageServiceProviderLaravelRecent&quot;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="http://image.intervention.io/getting_started/installation" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/08 Intervention Image.html.vue?vue&type=template&id=209712ba

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/08 Intervention Image.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\08 Intervention Image.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _08_Intervention_Image_html = (script);

/***/ })

};
;
//# sourceMappingURL=3716.app.js.map