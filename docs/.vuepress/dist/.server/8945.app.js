"use strict";
exports.id = 8945;
exports.ids = [8945];
exports.modules = {

/***/ 22:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-68f69240",
  "path": "/dev/laravel/phpword.html",
  "title": "PHPWORD",
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
    },
    {
      "level": 2,
      "title": "Utilisation avec livewire",
      "slug": "utilisation-avec-livewire",
      "children": [
        {
          "level": 3,
          "title": "Générer un fichier",
          "slug": "generer-un-fichier",
          "children": []
        },
        {
          "level": 3,
          "title": "Remplir un fichier",
          "slug": "remplir-un-fichier",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Source",
      "slug": "source",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/phpword.md",
  "git": {
    "updatedTime": 1627984669000,
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

/***/ 1559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ phpword_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/phpword.html.vue?vue&type=template&id=9d5a593e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="phpword" tabindex="-1"><a class="header-anchor" href="#phpword" aria-hidden="true">#</a> PHPWORD</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Package laravel qui permet de générer des documents word.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require phpoffice/phpword
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation-avec-livewire" tabindex="-1"><a class="header-anchor" href="#utilisation-avec-livewire" aria-hidden="true">#</a> Utilisation avec livewire</h2><h3 id="generer-un-fichier" tabindex="-1"><a class="header-anchor" href="#generer-un-fichier" aria-hidden="true">#</a> Générer un fichier</h3><p>IL suffit de créer une methode comme celle qui suit :</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getdoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">\$phpWord</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpWord<span class="token punctuation">\\</span>PhpWord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$section</span> <span class="token operator">=</span> <span class="token variable">\$phpWord</span><span class="token operator">-&gt;</span><span class="token function">addSection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token variable">\$section</span><span class="token operator">-&gt;</span><span class="token function">addText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$objWriter</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpWord<span class="token punctuation">\\</span>IOFactory</span><span class="token operator">::</span><span class="token function">createWriter</span><span class="token punctuation">(</span><span class="token variable">\$phpWord</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Word2007&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$objWriter</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Appdividend.docx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Appdividend.docx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="remplir-un-fichier" tabindex="-1"><a class="header-anchor" href="#remplir-un-fichier" aria-hidden="true">#</a> Remplir un fichier</h3><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><ul><li><a href="https://appdividend.com/2018/04/23/how-to-create-word-document-file-in-laravel/" target="_blank" rel="noopener noreferrer">Laravel word`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/PHPOffice/PHPWord" target="_blank" rel="noopener noreferrer">Github`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://phpword.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/phpword.html.vue?vue&type=template&id=9d5a593e

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/phpword.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\phpword.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const phpword_html = (script);

/***/ })

};
;
//# sourceMappingURL=8945.app.js.map