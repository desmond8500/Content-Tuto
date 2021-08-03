"use strict";
exports.id = 4003;
exports.ids = [4003];
exports.modules = {

/***/ 6273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-21dc6956",
  "path": "/dev/laravel/Laravel%20Livewire.html",
  "title": "Laravel : Livewire",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Decription",
      "slug": "decription",
      "children": []
    },
    {
      "level": 2,
      "title": "Ajouter la pagination",
      "slug": "ajouter-la-pagination",
      "children": []
    },
    {
      "level": 2,
      "title": "Ajouter une image",
      "slug": "ajouter-une-image",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/Laravel Livewire.md",
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

/***/ 1040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Laravel_Livewire_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/Laravel Livewire.html.vue?vue&type=template&id=4a7f11d4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-livewire" tabindex="-1"><a class="header-anchor" href="#laravel-livewire" aria-hidden="true">#</a> Laravel : Livewire</h1><h2 id="decription" tabindex="-1"><a class="header-anchor" href="#decription" aria-hidden="true">#</a> Decription</h2><p>C&#39;est une librairie laravel qui permetde faire du code javacript avec du code php.<br><a href="https://www.youtube.com/watch?v=fhKcI3HAP98&amp;list=PLEhEHUEU3x5pcQJHE8WBLqlHt2o3q5O-f&amp;index=7" target="_blank" rel="noopener noreferrer">Vidéo`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="ajouter-la-pagination" tabindex="-1"><a class="header-anchor" href="#ajouter-la-pagination" aria-hidden="true">#</a> Ajouter la pagination</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>    <span class="token keyword">use</span> <span class="token package">WithPagination</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">\$paginationTheme</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;bootstrap&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ajouter-une-image" tabindex="-1"><a class="header-anchor" href="#ajouter-une-image" aria-hidden="true">#</a> Ajouter une image</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WithFileUploads</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token variable">\$photo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">disk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">deleteDirectory</span><span class="token punctuation">(</span><span class="token variable">\$dir</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">\$name</span> <span class="token operator">=</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">getClientOriginalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">storeAS</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;public/<span class="token interpolation"><span class="token variable">\$dir</span></span>&quot;</span><span class="token punctuation">,</span> <span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/Laravel Livewire.html.vue?vue&type=template&id=4a7f11d4

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/Laravel Livewire.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\Laravel Livewire.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Laravel_Livewire_html = (script);

/***/ })

};
;
//# sourceMappingURL=4003.app.js.map