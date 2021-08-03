"use strict";
exports.id = 4689;
exports.ids = [4689];
exports.modules = {

/***/ 9856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e5776916",
  "path": "/dev/laravel/Laravel%20Envoy.html",
  "title": "Laravel : Laravel Envoy",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Prérequis",
      "slug": "prerequis",
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
      "title": "Code de base",
      "slug": "code-de-base",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/Laravel Envoy.md",
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

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Laravel_Envoy_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/Laravel Envoy.html.vue?vue&type=template&id=f01e8694

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-laravel-envoy" tabindex="-1"><a class="header-anchor" href="#laravel-laravel-envoy" aria-hidden="true">#</a> Laravel : Laravel Envoy</h1><h2 id="prerequis" tabindex="-1"><a class="header-anchor" href="#prerequis" aria-hidden="true">#</a> Prérequis</h2><ul><li>composer</li><li>php (extension curl)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>composer <span class="token keyword">global</span> <span class="token keyword">require</span> laravel<span class="token operator">/</span>envoy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="code-de-base" tabindex="-1"><a class="header-anchor" href="#code-de-base" aria-hidden="true">#</a> Code de base</h2><p>Connexion à un serveur web via ssh</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;]])

@task(&#39;foo&#39;, [&#39;on&#39; =&gt; &#39;web&#39;])
    ls -la
@endtask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Connexion à un serveur local</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@servers([&#39;localhost&#39; =&gt; &#39;127.0.0.1&#39;])

@task(&#39;foo&#39;, [&#39;on&#39; =&gt; &#39;web&#39;])
    ls -la
@endtask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/Laravel Envoy.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\Laravel Envoy.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Laravel_Envoy_html = (script);

/***/ })

};
;
//# sourceMappingURL=4689.app.js.map