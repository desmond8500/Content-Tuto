"use strict";
exports.id = 8350;
exports.ids = [8350];
exports.modules = {

/***/ 6924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-cc8aa57e",
  "path": "/dev/laravel/10%20G%C3%A9n%C3%A9rer%20des%20PDFs.html",
  "title": "Laravel : Générateur de fichiers PDF",
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
      "title": "Installation",
      "slug": "installation",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/10 Générer des PDFs.md",
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

/***/ 5948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _10_G_n_rer_des_PDFs_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/10 Générer des PDFs.html.vue?vue&type=template&id=4f514aeb



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-generateur-de-fichiers-pdf" tabindex="-1"><a class="header-anchor" href="#laravel-generateur-de-fichiers-pdf" aria-hidden="true">#</a> Laravel : Générateur de fichiers PDF</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Nous avons parfois besoin de générer des fichiers PDFs pour des devis, des factures etc.<br> Ici nous allons monter comment faire cela avec Laravel et la librairie <a href="https://github.com/barryvdh/laravel-dompdf" target="_blank" rel="noopener noreferrer">barryvdh`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> .</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p><a href="https://www.itsolutionstuff.com/post/laravel-57-generate-pdf-from-html-exampleexample.html" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ol><li>Installer la librairie</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require barryvdh/laravel-dompdf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>Configurer la librairie dans le fichier <code>/config/app.php</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;providers&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
	<span class="token punctuation">..</span><span class="token punctuation">..</span>
	Barryvdh<span class="token punctuation">\\</span>DomPDF<span class="token punctuation">\\</span>ServiceProvider::class,
<span class="token punctuation">]</span>,

<span class="token string">&#39;aliases&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
	<span class="token punctuation">..</span><span class="token punctuation">..</span>
	<span class="token string">&#39;PDF&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> Barryvdh<span class="token punctuation">\\</span>DomPDF<span class="token punctuation">\\</span>Facade::class,
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li>Créer une route vers un controlleur</li><li>Créer un controlleur pour gérer la conversion</li><li>Créer une vue blade qui sera affichée</li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PDF</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">generatePDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token punctuation">{</span>
        <span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Welcome to HDTuto.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">\$pdf</span> <span class="token operator">=</span> <span class="token class-name static-context">PDF</span><span class="token operator">::</span><span class="token function">loadView</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;myPDF&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">\$pdf</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>La variable <code>\$data</code> est utilisée pour envoyer des données vers la vue.<br><code>myPDF</code> est la vue blade qui sera convertie en PDF.<br><code>test.php</code> est le fichier qui sera généré</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/10 Générer des PDFs.html.vue?vue&type=template&id=4f514aeb

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/10 Générer des PDFs.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\10 Générer des PDFs.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _10_G_n_rer_des_PDFs_html = (script);

/***/ })

};
;
//# sourceMappingURL=8350.app.js.map