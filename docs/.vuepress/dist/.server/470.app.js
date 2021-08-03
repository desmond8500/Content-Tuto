"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2a0abab2",
  "path": "/dev/laravel/0.html",
  "title": "Laravel",
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
      "title": "Prérequis",
      "slug": "prerequis",
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
      "title": "Outils",
      "slug": "outils",
      "children": [
        {
          "level": 3,
          "title": "Modélisation de la base de donnée",
          "slug": "modelisation-de-la-base-de-donnee",
          "children": []
        },
        {
          "level": 3,
          "title": "Administration",
          "slug": "administration",
          "children": []
        },
        {
          "level": 3,
          "title": "Front End Vue JS",
          "slug": "front-end-vue-js",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Librairies à tester",
      "slug": "librairies-a-tester",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/0.md",
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

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _0_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/0.html.vue?vue&type=template&id=026a515a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel" aria-hidden="true">#</a> Laravel</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Laravel est un framework PHP créé par Taylor Otwell.</p><h2 id="prerequis" tabindex="-1"><a class="header-anchor" href="#prerequis" aria-hidden="true">#</a> Prérequis</h2><ul><li><a href="https://www.php.net/downloads" target="_blank" rel="noopener noreferrer">PHP`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://getcomposer.org/download/" target="_blank" rel="noopener noreferrer">Composer`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (Composer est un gestionaire de dépendance)</li><li><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Visual Studio code`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (Est un éditeur de texte)</li><li><a href="https://laragon.org/download/" target="_blank" rel="noopener noreferrer">Laragon`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (Serveur http, de base de donnée très performant)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><ol><li>Ouvrir un terminal</li><li>Lancer la commande suivante :</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefer-dist laravel/laravel mon_projet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Entrer dans le dossier du projet</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token builtin class-name">cd</span> mon_projet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Lancer le projet</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan serve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="outils" tabindex="-1"><a class="header-anchor" href="#outils" aria-hidden="true">#</a> Outils</h2><h3 id="modelisation-de-la-base-de-donnee" tabindex="-1"><a class="header-anchor" href="#modelisation-de-la-base-de-donnee" aria-hidden="true">#</a> Modélisation de la base de donnée</h3><p>Pour modélier votre base de donnée vous pouvez utilier <a href="https://www.laravelsd.com/" target="_blank" rel="noopener noreferrer">Laravel Schema Designer`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> pour le faire plus facilement. En plus ce site vous permet:</p><ul><li>de sauvegarder vos modèles de données</li><li>de partager vos modèles de données</li><li>de générer les controlleurs, les modèles et les migrations</li></ul><h3 id="administration" tabindex="-1"><a class="header-anchor" href="#administration" aria-hidden="true">#</a> Administration</h3><h4 id="infyom-laravel-generator" tabindex="-1"><a class="header-anchor" href="#infyom-laravel-generator" aria-hidden="true">#</a> Infyom Laravel Generator</h4><p>C&#39;est un puissant outil qui permet de générer très rapidement des CRUDs, des APIs, des tests unitaires et une documentation avec Swagger. Il vous permet de gérer tout cela avec un backoffice qui utilise le theme CoreUI ou adminlte2.</p><p>Le répo git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/InfyOmLabs/coreui-generator.git mon_projet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><a href="https://labs.infyom.com" target="_blank" rel="noopener noreferrer">Site`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="front-end-vue-js" tabindex="-1"><a class="header-anchor" href="#front-end-vue-js" aria-hidden="true">#</a> Front End Vue JS</h3><p>Le front end d&#39;une application laravel peut être faite avec du blade ou avec Vue JS. L&#39;avantage d&#39;utiliser VueJS c&#39;est que l&#39;on peut créer des Single Page Applications (SPA) qui sont plus rapides et plus dynamiques.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/ui
php artisan ui vue
<span class="token function">npm</span> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="librairies-a-tester" tabindex="-1"><a class="header-anchor" href="#librairies-a-tester" aria-hidden="true">#</a> Librairies à tester</h2><ul><li><a href="https://github.com/BadChoice/handesk?ref=LaravelCollections.com" target="_blank" rel="noopener noreferrer">Handesk`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, gestion de tickets</li><li><a href="https://github.com/iluminar/goodwork?ref=LaravelCollections.com" target="_blank" rel="noopener noreferrer">Goodwork`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, Gestion de tache</li><li><a href="https://github.com/range-of-motion/budget?ref=LaravelCollections.com" target="_blank" rel="noopener noreferrer">Budget`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, gestion financière</li><li><a href="https://github.com/akaunting/akaunting" target="_blank" rel="noopener noreferrer">akaunting `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, gestion de devis et autre</li><li><a href="https://github.com/nahid/talk?ref=LaravelCollections.com" target="_blank" rel="noopener noreferrer">Laravel Talk`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>,tchat en ligne</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/0.html.vue?vue&type=template&id=026a515a

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/0.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\0.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _0_html = (script);

/***/ })

};
;
//# sourceMappingURL=470.app.js.map