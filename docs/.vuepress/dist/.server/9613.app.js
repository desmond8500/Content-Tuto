"use strict";
exports.id = 9613;
exports.ids = [9613];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d9649018",
  "path": "/dev/laravel/13%20Faker.html",
  "title": "Laravel : Faker",
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
      "title": "Utilisation dans un controlleur",
      "slug": "utilisation-dans-un-controlleur",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/13 Faker.md",
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

/***/ 7687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _13_Faker_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/13 Faker.html.vue?vue&type=template&id=2f9bf812

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-faker" tabindex="-1"><a class="header-anchor" href="#laravel-faker" aria-hidden="true">#</a> Laravel : Faker</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Permet de générer des données génériques pour remplir une base de donnée.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require fzaninotto/faker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation-dans-un-controlleur" tabindex="-1"><a class="header-anchor" href="#utilisation-dans-un-controlleur" aria-hidden="true">#</a> Utilisation dans un controlleur</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\\</span>Factory</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Client</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SeedController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">clients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token variable">\$faker</span> <span class="token operator">=</span> <span class="token class-name static-context">Faker</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;fr_FR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">\$seed</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">\$seed</span><span class="token operator">-&gt;</span><span class="token property">compte_id</span>    <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token variable">\$seed</span><span class="token operator">-&gt;</span><span class="token property">nom</span>          <span class="token operator">=</span> <span class="token variable">\$faker</span><span class="token operator">-&gt;</span><span class="token property">company</span><span class="token punctuation">;</span>
        <span class="token variable">\$seed</span><span class="token operator">-&gt;</span><span class="token property">description</span>  <span class="token operator">=</span> <span class="token variable">\$faker</span><span class="token operator">-&gt;</span><span class="token property">text</span><span class="token punctuation">;</span>
        <span class="token variable">\$seed</span><span class="token operator">-&gt;</span><span class="token property">adresse</span>      <span class="token operator">=</span> <span class="token variable">\$faker</span><span class="token operator">-&gt;</span><span class="token property">address</span><span class="token punctuation">;</span>
        <span class="token variable">\$seed</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/13 Faker.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\13 Faker.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _13_Faker_html = (script);

/***/ })

};
;
//# sourceMappingURL=9613.app.js.map