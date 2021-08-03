"use strict";
exports.id = 2671;
exports.ids = [2671];
exports.modules = {

/***/ 5584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7619906a",
  "path": "/dev/angular/Markdown.html",
  "title": "NGX Markdown",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
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
      "children": [
        {
          "level": 3,
          "title": "Html",
          "slug": "html",
          "children": []
        },
        {
          "level": 3,
          "title": "App-modules.Module",
          "slug": "app-modules-module",
          "children": []
        },
        {
          "level": 3,
          "title": "Angular.json",
          "slug": "angular-json",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/angular/Markdown.md",
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

/***/ 1512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Markdown_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/Markdown.html.vue?vue&type=template&id=538df925



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="ngx-markdown" tabindex="-1"><a class="header-anchor" href="#ngx-markdown" aria-hidden="true">#</a> NGX Markdown</h1><p><a href="https://www.npmjs.com/package/ngx-markdown" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-cli ext-cli line-numbers-mode"><pre class="language-cli"><code>  npm install ngx-markdown --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> Html</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>markdown</span> <span class="token attr-name">[src]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>assets/markdown/test.md<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>markdown</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="app-modules-module" tabindex="-1"><a class="header-anchor" href="#app-modules-module" aria-hidden="true">#</a> App-modules.Module</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClientModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MarkdownModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ngx-markdown&#39;</span><span class="token punctuation">;</span>


imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    HttpClientModule<span class="token punctuation">,</span>
    MarkdownModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="angular-json" tabindex="-1"><a class="header-anchor" href="#angular-json" aria-hidden="true">#</a> Angular.json</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;node_modules/marked/lib/marked.js&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Markdown.html.vue?vue&type=template&id=538df925

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Markdown.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\Markdown.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Markdown_html = (script);

/***/ })

};
;
//# sourceMappingURL=2671.app.js.map