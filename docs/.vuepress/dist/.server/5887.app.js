"use strict";
exports.id = 5887;
exports.ids = [5887];
exports.modules = {

/***/ 5536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d30a7534",
  "path": "/dev/angular/04%20Navigation.html",
  "title": "Navigation",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Navigation entre deux pages",
      "slug": "navigation-entre-deux-pages",
      "children": []
    }
  ],
  "filePathRelative": "dev/angular/04 Navigation.md",
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

/***/ 1511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _04_Navigation_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/04 Navigation.html.vue?vue&type=template&id=5afc15e1

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h1><h2 id="navigation-entre-deux-pages" tabindex="-1"><a class="header-anchor" href="#navigation-entre-deux-pages" aria-hidden="true">#</a> Navigation entre deux pages</h2><p>Page 1</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>consulter(id)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Page suivante<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> route<span class="token operator">:</span> Router<span class="token punctuation">,</span> <span class="token keyword">private</span> service<span class="token operator">:</span> ServiceService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token function">consulter</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Service</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> route<span class="token operator">:</span> Router<span class="token punctuation">,</span> <span class="token keyword">private</span> http<span class="token operator">:</span> HttpClient<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token function">setIdd</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;/userinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token function">getuser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>server <span class="token operator">+</span> <span class="token string">&#39;api/getuser/&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/04 Navigation.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\04 Navigation.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _04_Navigation_html = (script);

/***/ })

};
;
//# sourceMappingURL=5887.app.js.map