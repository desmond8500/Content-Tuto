"use strict";
exports.id = 6494;
exports.ids = [6494];
exports.modules = {

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a77265c2",
  "path": "/dev/laravel/16%20Migrations.html",
  "title": "Laravel : Les migrations",
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
      "title": "Ajouter une colonne à une table qui existe",
      "slug": "ajouter-une-colonne-a-une-table-qui-existe",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/16 Migrations.md",
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

/***/ 8943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _16_Migrations_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/16 Migrations.html.vue?vue&type=template&id=f90155fc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-les-migrations" tabindex="-1"><a class="header-anchor" href="#laravel-les-migrations" aria-hidden="true">#</a> Laravel : Les migrations</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="ajouter-une-colonne-a-une-table-qui-existe" tabindex="-1"><a class="header-anchor" href="#ajouter-une-colonne-a-une-table-qui-existe" aria-hidden="true">#</a> Ajouter une colonne à une table qui existe</h2><p>Dans le terminal :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:migration add_tel_to_users
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>puis ajouter le champs dans le fichier qui a été créé</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;projet_journals&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">\$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">\$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;folder&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>lancer la migration</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/16 Migrations.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\16 Migrations.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _16_Migrations_html = (script);

/***/ })

};
;
//# sourceMappingURL=6494.app.js.map