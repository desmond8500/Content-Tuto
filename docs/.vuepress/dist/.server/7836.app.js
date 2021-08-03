"use strict";
exports.id = 7836;
exports.ids = [7836];
exports.modules = {

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6402494e",
  "path": "/logiciels/git.html",
  "title": "GIT",
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
    },
    {
      "level": 2,
      "title": "Workflow",
      "slug": "workflow",
      "children": []
    },
    {
      "level": 2,
      "title": "Récupération des mises à jour",
      "slug": "recuperation-des-mises-a-jour",
      "children": []
    },
    {
      "level": 2,
      "title": "Git",
      "slug": "git-1",
      "children": [
        {
          "level": 3,
          "title": "Créér un nouveau répo",
          "slug": "creer-un-nouveau-repo",
          "children": []
        },
        {
          "level": 3,
          "title": "Lier à un répo qui existe",
          "slug": "lier-a-un-repo-qui-existe",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "logiciels/git.md",
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

/***/ 8016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ git_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/logiciels/git.html.vue?vue&type=template&id=e117d4ca

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>C&#39;est un gestionnaire de dépendances qui permet de faciliter le développment d&#39;applications.</p><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch dev-diene
<span class="token function">git</span> checkout dev-diene
<span class="token function">git</span> merge master
<span class="token function">git</span> push --set-upstream origin dev-diene
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h2><p>master = master<br> develop = beta test<br> dev = developper</p><h2 id="recuperation-des-mises-a-jour" tabindex="-1"><a class="header-anchor" href="#recuperation-des-mises-a-jour" aria-hidden="true">#</a> Récupération des mises à jour</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout develop
<span class="token function">git</span> pull
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>permet de récupérer les modifications de la branche develop</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout dev-diene
<span class="token function">git</span> merge develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="git-1" tabindex="-1"><a class="header-anchor" href="#git-1" aria-hidden="true">#</a> Git</h2><h3 id="creer-un-nouveau-repo" tabindex="-1"><a class="header-anchor" href="#creer-un-nouveau-repo" aria-hidden="true">#</a> Créér un nouveau répo</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# senecolo4&quot;</span> <span class="token operator">&gt;&gt;</span> README.md
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/desmond8500/senecolo4.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="lier-a-un-repo-qui-existe" tabindex="-1"><a class="header-anchor" href="#lier-a-un-repo-qui-existe" aria-hidden="true">#</a> Lier à un répo qui existe</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/desmond8500/senecolo4.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/logiciels/git.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\logiciels\\git.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const git_html = (script);

/***/ })

};
;
//# sourceMappingURL=7836.app.js.map