"use strict";
exports.id = 6155;
exports.ids = [6155];
exports.modules = {

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ffc0777e",
  "path": "/dev/angular/Conditions.html",
  "title": "Conditions",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Les Switch cases",
      "slug": "les-switch-cases",
      "children": []
    },
    {
      "level": 2,
      "title": "Les Conditions",
      "slug": "les-conditions",
      "children": [
        {
          "level": 3,
          "title": "If Condition",
          "slug": "if-condition",
          "children": []
        },
        {
          "level": 3,
          "title": "If and Else condition",
          "slug": "if-and-else-condition",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/angular/Conditions.md",
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

/***/ 7822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Conditions_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/Conditions.html.vue?vue&type=template&id=4664c37d

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="conditions" tabindex="-1"><a class="header-anchor" href="#conditions" aria-hidden="true">#</a> Conditions</h1><h2 id="les-switch-cases" tabindex="-1"><a class="header-anchor" href="#les-switch-cases" aria-hidden="true">#</a> Les Switch cases</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">[ngSwitch]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>monPlat<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">*ngSwitchCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span>Hamburger<span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span> C&#39;est de la malbouffe <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">*ngSwitchCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span>yassa<span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span> C&#39;est de poisson et du riz avec de la sauce d&#39;oignon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">*ngSwitchCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span>Nana<span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span> C&#39;est pas un plat ça <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="les-conditions" tabindex="-1"><a class="header-anchor" href="#les-conditions" aria-hidden="true">#</a> Les Conditions</h2><h3 id="if-condition" tabindex="-1"><a class="header-anchor" href="#if-condition" aria-hidden="true">#</a> If Condition</h3><p>Condition vrai ou faux.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>userHasPet<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    { { user.pet.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Condition complexes</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>books &gt; 0<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    { { books }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="if-and-else-condition" tabindex="-1"><a class="header-anchor" href="#if-and-else-condition" aria-hidden="true">#</a> If and Else condition</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>books &gt; 0; else select<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    { { books }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#select</span><span class="token punctuation">&gt;</span></span>
    Il n&#39;y a pas de livres
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Conditions.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\Conditions.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Conditions_html = (script);

/***/ })

};
;
//# sourceMappingURL=6155.app.js.map