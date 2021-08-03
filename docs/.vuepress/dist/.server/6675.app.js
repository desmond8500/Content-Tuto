"use strict";
exports.id = 6675;
exports.ids = [6675];
exports.modules = {

/***/ 7713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-36c444bb",
  "path": "/dev/laravel/03%20Deploy.html",
  "title": "Laravel : Déployer un projet laravel",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Préréquis",
      "slug": "prerequis",
      "children": [
        {
          "level": 3,
          "title": "Editeur de texte",
          "slug": "editeur-de-texte",
          "children": []
        },
        {
          "level": 3,
          "title": "Versionning",
          "slug": "versionning",
          "children": []
        },
        {
          "level": 3,
          "title": "Création d'un répo sur git",
          "slug": "creation-d-un-repo-sur-git",
          "children": []
        },
        {
          "level": 3,
          "title": "Projet laravel",
          "slug": "projet-laravel",
          "children": []
        },
        {
          "level": 3,
          "title": "Commit",
          "slug": "commit",
          "children": []
        },
        {
          "level": 3,
          "title": "Dans le serveur",
          "slug": "dans-le-serveur",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "dev/laravel/03 Deploy.md",
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

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _03_Deploy_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/03 Deploy.html.vue?vue&type=template&id=1b98ae4a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laravel-deployer-un-projet-laravel" tabindex="-1"><a class="header-anchor" href="#laravel-deployer-un-projet-laravel" aria-hidden="true">#</a> Laravel : Déployer un projet laravel</h1><h2 id="prerequis" tabindex="-1"><a class="header-anchor" href="#prerequis" aria-hidden="true">#</a> Préréquis</h2><h3 id="editeur-de-texte" tabindex="-1"><a class="header-anchor" href="#editeur-de-texte" aria-hidden="true">#</a> Editeur de texte</h3><p>Il faudra utiliser un bon éditeur de texte tel que <strong>Atom</strong> ou <strong>Visua Studio Code</strong>.<br> Cela va faciliter l&#39;utilisation de git.</p><h3 id="versionning" tabindex="-1"><a class="header-anchor" href="#versionning" aria-hidden="true">#</a> Versionning</h3><ol><li>Créer un compte sur <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub.com`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.<br> Lors de la création il faut créer un compte avec un mail et un mot de passe. Si vous vous connectez avec votre compte google vous risquez d&#39;avoir des problèmes pour utiliser <strong>GitKraken</strong>.</li><li>Installer <strong>Git</strong> sur votre machine au besoin.</li><li>Installer <strong>GitKraken</strong>, il vous permettra de gérer plus facilement vos répos.</li></ol><h3 id="creation-d-un-repo-sur-git" tabindex="-1"><a class="header-anchor" href="#creation-d-un-repo-sur-git" aria-hidden="true">#</a> Création d&#39;un répo sur git</h3><ol><li>Lancez <strong>GitKraken</strong></li><li>Vous faites <code>File &gt; Init Repo</code></li><li>Une fenêtre s&#39;affiche</li><li>Vous selectionnez <strong>GitHub.com</strong> puis vous remplissez les champs. Si vous utilisez GitKraken pour la première fois on vous demandemra de vous connecter à votre compte <strong>GitHub</strong>.</li></ol><h3 id="projet-laravel" tabindex="-1"><a class="header-anchor" href="#projet-laravel" aria-hidden="true">#</a> Projet laravel</h3><p>Si vous avez déja un projet laravel copiez le contenu du dossier dans le dossier git que vous venez de créer. Sinon Créez en un.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefert-dist laravel/laravel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Dans le dossier du projet lancez la commande :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan key:generate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Ouvrez le fichier <strong>.env</strong> et allez à la ligne <strong>APP_KEY=</strong> et copiez tout ce qu&#39;il y a à la suite.<br> Puis dans le fichier <code>config/app.php</code> allez à la ligne</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;APP_KEY&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ajoutez la clé</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;APP_KEY&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;base64:dshfqkljshfjlkqshflqsdfhsdk=&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h3><p>Dans <strong>GitKraken</strong> fait un commit puis un pull du projet</p><h3 id="dans-le-serveur" tabindex="-1"><a class="header-anchor" href="#dans-le-serveur" aria-hidden="true">#</a> Dans le serveur</h3><p>Créer un compte chez un hébergeur. Chez <a href="http://alwaysdata.net" target="_blank" rel="noopener noreferrer">Alwaysdata.net`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> vous pouvez créer une compte gratuit avec 100mo de stockage et une base de donnée.</p><ol><li>Connectez vous en ssh</li><li>Allez dans le dossier <strong>www</strong> puis faites</li><li>Créez un site et liez le au dossier créé précedemment</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull adresse_du_repo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/03 Deploy.html.vue?vue&type=template&id=1b98ae4a

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/03 Deploy.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\03 Deploy.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _03_Deploy_html = (script);

/***/ })

};
;
//# sourceMappingURL=6675.app.js.map