"use strict";
exports.id = 2705;
exports.ids = [2705];
exports.modules = {

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c9817c1a",
  "path": "/dev/laravel/05%20image.html",
  "title": "Laravel : Stocker des images",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Fichier de config",
      "slug": "fichier-de-config",
      "children": []
    },
    {
      "level": 2,
      "title": "Controller",
      "slug": "controller",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/05 image.md",
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

/***/ 5163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _05_image_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/05 image.html.vue?vue&type=template&id=cc9470d4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-stocker-des-images" tabindex="-1"><a class="header-anchor" href="#laravel-stocker-des-images" aria-hidden="true">#</a> Laravel : Stocker des images</h1><h2 id="fichier-de-config" tabindex="-1"><a class="header-anchor" href="#fichier-de-config" aria-hidden="true">#</a> Fichier de config</h2><p>Ouvrir le fichier <strong>config/filesystems.php</strong> et modifier la partie public:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;public&#39; =&gt; [
          &#39;driver&#39; =&gt; &#39;local&#39;,
          &#39;root&#39; =&gt; public_path() . &#39;/uploads&#39;,
          &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/public&#39;,
          &#39;visibility&#39; =&gt; &#39;public&#39;,
      ],
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">\$request</span><span class="token punctuation">)</span>    <span class="token punctuation">{</span>
    <span class="token variable">\$cover</span> <span class="token operator">=</span> <span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$extension</span> <span class="token operator">=</span> <span class="token variable">\$cover</span><span class="token operator">-&gt;</span><span class="token function">getClientOriginalExtension</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">disk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token variable">\$cover</span><span class="token operator">-&gt;</span><span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;.&#39;</span><span class="token operator">.</span><span class="token variable">\$extension</span><span class="token punctuation">,</span>  <span class="token class-name static-context">File</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$cover</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/05 image.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\05 image.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _05_image_html = (script);

/***/ })

};
;
//# sourceMappingURL=2705.app.js.map