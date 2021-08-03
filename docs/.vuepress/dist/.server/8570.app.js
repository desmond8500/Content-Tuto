"use strict";
exports.id = 8570;
exports.ids = [8570];
exports.modules = {

/***/ 9955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1e71116e",
  "path": "/dev/ionic/06%20Modal.html",
  "title": "Modal (Ionic 5)",
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
      "title": "Utilisation",
      "slug": "utilisation",
      "children": []
    }
  ],
  "filePathRelative": "dev/ionic/06 Modal.md",
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

/***/ 6944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _06_Modal_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/ionic/06 Modal.html.vue?vue&type=template&id=21324196

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="modal-ionic-5" tabindex="-1"><a class="header-anchor" href="#modal-ionic-5" aria-hidden="true">#</a> Modal (Ionic 5)</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><p>Page</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-content</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mybutton<span class="token punctuation">&quot;</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>presentModal()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Obtenir une adresse
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-content</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ModalController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ionic/angular&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LocalisationPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modals/localisation/localisation.page&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IndexPage</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> modalController<span class="token operator">:</span> ModalController<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  
  <span class="token keyword">async</span> <span class="token function">presentModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modalController<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      component<span class="token operator">:</span> LocalisationPage<span class="token punctuation">,</span>
      cssClass<span class="token operator">:</span> <span class="token string">&#39;my-custom-class&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> modal<span class="token punctuation">.</span><span class="token function">present</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Page modale</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-content</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dismiss()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-content</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ModalController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ionic/angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LocalisationPage</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> modalCtrl<span class="token operator">:</span> ModalController<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>modalCtrl<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/ionic/06 Modal.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\ionic\\06 Modal.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _06_Modal_html = (script);

/***/ })

};
;
//# sourceMappingURL=8570.app.js.map