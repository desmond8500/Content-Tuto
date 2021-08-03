"use strict";
exports.id = 4504;
exports.ids = [4504];
exports.modules = {

/***/ 4240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2553004b",
  "path": "/dev/laravel/Plugin%20Parsedown.html",
  "title": "Laravel : Parsedown",
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
      "title": "Sources",
      "slug": "sources",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/Plugin Parsedown.md",
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

/***/ 1626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Plugin_Parsedown_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/Plugin Parsedown.html.vue?vue&type=template&id=699ec8b5



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-parsedown" tabindex="-1"><a class="header-anchor" href="#laravel-parsedown" aria-hidden="true">#</a> Laravel : Parsedown</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Parsedown permet de parser du Markdown.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Pour que cela marche il faut modifier le parsing des balises de code.<br> Par défaut la classe utilisée est <code>class= &quot;language-html&quot;</code>. Il faut enlever la partie <code>language</code> dans le fichier <code>Parsedown.php</code> d&#39;Erusev qui est dans <code>vendor/parsedown/Parsedown.php</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$class</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;language-&#39;</span><span class="token operator">.</span><span class="token variable">\$language</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>par</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$class</span> <span class="token operator">=</span> <span class="token variable">\$language</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h2><ul><li><a href="https://parsedown.org/" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/Plugin Parsedown.html.vue?vue&type=template&id=699ec8b5

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/Plugin Parsedown.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\Plugin Parsedown.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Plugin_Parsedown_html = (script);

/***/ })

};
;
//# sourceMappingURL=4504.app.js.map