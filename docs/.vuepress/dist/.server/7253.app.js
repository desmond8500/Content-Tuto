"use strict";
exports.id = 7253;
exports.ids = [7253];
exports.modules = {

/***/ 5126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c48d1892",
  "path": "/dev/angular/AngularLearn.html",
  "title": "Angular",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Débuter un projet",
      "slug": "debuter-un-projet",
      "children": []
    },
    {
      "level": 3,
      "title": "Créer un composant",
      "slug": "creer-un-composant",
      "children": []
    },
    {
      "level": 3,
      "title": "Créer une classe",
      "slug": "creer-une-classe",
      "children": []
    },
    {
      "level": 3,
      "title": "Ajouter un formulaire",
      "slug": "ajouter-un-formulaire",
      "children": []
    }
  ],
  "filePathRelative": "dev/angular/AngularLearn.md",
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

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AngularLearn_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/AngularLearn.html.vue?vue&type=template&id=9ccd6c5e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h1><h3 id="debuter-un-projet" tabindex="-1"><a class="header-anchor" href="#debuter-un-projet" aria-hidden="true">#</a> Débuter un projet</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng new project
<span class="token builtin class-name">cd</span> project
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="creer-un-composant" tabindex="-1"><a class="header-anchor" href="#creer-un-composant" aria-hidden="true">#</a> Créer un composant</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g c heroes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>et dans le fichier <strong>app.component.html</strong> ajoutez le composant</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-heroes</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-heroes</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="creer-une-classe" tabindex="-1"><a class="header-anchor" href="#creer-une-classe" aria-hidden="true">#</a> Créer une classe</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g class hero
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Contenu de la classe hero</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>et dans le fichier <strong>app/heroes/heroes.component.html</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Hero <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../hero&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ajouter-un-formulaire" tabindex="-1"><a class="header-anchor" href="#ajouter-un-formulaire" aria-hidden="true">#</a> Ajouter un formulaire</h3><p>dans le fichier app.modules.ls ajouter :</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FormsModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- NgModel lives here</span>

imports<span class="token operator">:</span> <span class="token punctuation">[</span>
  BrowserModule<span class="token punctuation">,</span>
  FormsModule
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>name:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">[(ngModel)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hero.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/AngularLearn.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\AngularLearn.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const AngularLearn_html = (script);

/***/ })

};
;
//# sourceMappingURL=7253.app.js.map