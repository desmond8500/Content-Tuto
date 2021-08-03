"use strict";
exports.id = 3177;
exports.ids = [3177];
exports.modules = {

/***/ 6052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6815a7dd",
  "path": "/dev/laravel/09%20Storage%20et%20Files.html",
  "title": "Laravel : Storage and Files",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Description",
      "slug": "description",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/09 Storage et Files.md",
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

/***/ 9888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _09_Storage_et_Files_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/09 Storage et Files.html.vue?vue&type=template&id=a0445f0e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-storage-and-files" tabindex="-1"><a class="header-anchor" href="#laravel-storage-and-files" aria-hidden="true">#</a> Laravel : Storage and Files</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Les objets <strong>Storage</strong> et <strong>File</strong> permettent de gérer facilement le traitement et le stockage de fichiers avec laravel.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// Require</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Storage</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>File</span><span class="token punctuation">;</span>

<span class="token comment">// Function</span>
<span class="token variable">\$cover</span> <span class="token operator">=</span> <span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$image</span> <span class="token operator">=</span> <span class="token variable">\$cover</span><span class="token operator">-&gt;</span><span class="token function">getClientOriginalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$dir</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;chemin/<span class="token interpolation"><span class="token variable">\$image</span></span>&quot;</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">disk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token variable">\$dir</span><span class="token punctuation">,</span>  <span class="token class-name static-context">File</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$cover</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Pour récupérer le nom du fichier il faut utiliser la fonction suivante :</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$cover</span><span class="token operator">-&gt;</span><span class="token function">getClientOriginalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Pour récupérer le nom qui a été généré :</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$cover</span><span class="token operator">-&gt;</span><span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/09 Storage et Files.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\09 Storage et Files.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _09_Storage_et_Files_html = (script);

/***/ })

};
;
//# sourceMappingURL=3177.app.js.map