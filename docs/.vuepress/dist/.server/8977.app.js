"use strict";
exports.id = 8977;
exports.ids = [8977];
exports.modules = {

/***/ 4811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-79a2dd56",
  "path": "/dev/angular/03%20Interpolation.html",
  "title": "Composants",
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
      "title": "Binding",
      "slug": "binding",
      "children": []
    }
  ],
  "filePathRelative": "dev/angular/03 Interpolation.md",
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

/***/ 3981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _03_Interpolation_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/03 Interpolation.html.vue?vue&type=template&id=4500a4b7

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="composants" tabindex="-1"><a class="header-anchor" href="#composants" aria-hidden="true">#</a> Composants</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Permet de créer des attributs ou des methodes et de les appeler dans le template</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> name <span class="token operator">=</span> <span class="token string">&quot;Midoriya&quot;</span><span class="token punctuation">;</span>

  <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">consolelog</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>template</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> {{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">[class]</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">[class.true]</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">public</span> error <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/03 Interpolation.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\03 Interpolation.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _03_Interpolation_html = (script);

/***/ })

};
;
//# sourceMappingURL=8977.app.js.map