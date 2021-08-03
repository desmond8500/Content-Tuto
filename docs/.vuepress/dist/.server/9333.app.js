"use strict";
exports.id = 9333;
exports.ids = [9333];
exports.modules = {

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-37c253b9",
  "path": "/dev/angular/02%20Composants.html",
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
      "title": "Fichier typescript",
      "slug": "fichier-typescript",
      "children": [
        {
          "level": 3,
          "title": "Décorateur",
          "slug": "decorateur",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/angular/02 Composants.md",
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

/***/ 6758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _02_Composants_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/02 Composants.html.vue?vue&type=template&id=e5bc9702

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="composants" tabindex="-1"><a class="header-anchor" href="#composants" aria-hidden="true">#</a> Composants</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>| Fichier | Fonction | :---- :---- | app.component.css | C&#39;est le fichier qui contient le ficher de style (css, scss) | | app.component.html | Contient le code html | | app.component.ts | Contient la classe |</p><h2 id="fichier-typescript" tabindex="-1"><a class="header-anchor" href="#fichier-typescript" aria-hidden="true">#</a> Fichier typescript</h2><h3 id="decorateur" tabindex="-1"><a class="header-anchor" href="#decorateur" aria-hidden="true">#</a> Décorateur</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>
    templateUrl<span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>
    styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> Selector</h4><ul><li>app-root = balise</li><li>app-root = classe</li><li>[app-root] = attribut</li></ul><h4 id="templateurl" tabindex="-1"><a class="header-anchor" href="#templateurl" aria-hidden="true">#</a> templateUrl</h4><ul><li>templateUrl = chemin vers le fichier html</li><li>template =</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">margin</span> <span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>\`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="templateurl-1" tabindex="-1"><a class="header-anchor" href="#templateurl-1" aria-hidden="true">#</a> templateUrl</h4><ul><li>styleUrls = [chemin vers le fichier html,]</li><li>style = <code>styles</code></li><li>la classe</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span><span class="token punctuation">{</span>
  title <span class="token operator">=</span> <span class="token string">&#39;Codevolution&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/02 Composants.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\02 Composants.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _02_Composants_html = (script);

/***/ })

};
;
//# sourceMappingURL=9333.app.js.map