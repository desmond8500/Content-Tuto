"use strict";
exports.id = 1304;
exports.ids = [1304];
exports.modules = {

/***/ 7770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7d7729d5",
  "path": "/os/linux/0%20New%20Dev%20Config%20Linux.html",
  "title": "Nouvelle installation Linux",
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
      "title": "Mise en place du serveur web",
      "slug": "mise-en-place-du-serveur-web",
      "children": []
    },
    {
      "level": 2,
      "title": "Configuration de Php",
      "slug": "configuration-de-php",
      "children": []
    },
    {
      "level": 2,
      "title": "installation de composer",
      "slug": "installation-de-composer",
      "children": [
        {
          "level": 3,
          "title": "Editeurs de textes",
          "slug": "editeurs-de-textes",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "os/linux/0 New Dev Config Linux.md",
  "git": {
    "updatedTime": 1627847106000,
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

/***/ 1394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _0_New_Dev_Config_Linux_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/os/linux/0 New Dev Config Linux.html.vue?vue&type=template&id=e018c65e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="nouvelle-installation-linux" tabindex="-1"><a class="header-anchor" href="#nouvelle-installation-linux" aria-hidden="true">#</a> Nouvelle installation Linux</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Lors d&#39;une nouvelle installation d&#39;une machine linux, nous avons besoin d&#39;installer et de configurer nos outils favoris avant de pouvoir travailler correctement.<br> Ce document rassemble l&#39;ensemble des procédures à suivre pour bien mener cet tache.</p><h2 id="mise-en-place-du-serveur-web" tabindex="-1"><a class="header-anchor" href="#mise-en-place-du-serveur-web" aria-hidden="true">#</a> Mise en place du serveur web</h2><p>Nous aurons besoin de :</p><ul><li>Apache 2 comme serveur http pour afficher les pages web</li><li>Php comme langage backend</li><li>NodeJS pour le front end nottament pour Ionic et Angular</li><li>Maria DB comme serveur de base de données</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apache2 php libapache2-mod-php mariadb-server php-mysql
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php-curl php-gd php-intl php-json php-mbstring php-xml php-zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="https://doc.ubuntu-fr.org/lamp" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="configuration-de-php" tabindex="-1"><a class="header-anchor" href="#configuration-de-php" aria-hidden="true">#</a> Configuration de Php</h2><p>Activer les extensions qu&#39;il faut dans le fichier <strong>/etc/php/7.0/cli/php.ini</strong>.</p><ul><li>xmml</li><li>pdo_mysql</li><li>pdo_sqlite</li></ul><p>et autres</p><h2 id="installation-de-composer" tabindex="-1"><a class="header-anchor" href="#installation-de-composer" aria-hidden="true">#</a> installation de composer</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">composer</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="editeurs-de-textes" tabindex="-1"><a class="header-anchor" href="#editeurs-de-textes" aria-hidden="true">#</a> Editeurs de textes</h3><ul><li>Atom</li><li>Visual Studio code</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/linux/0 New Dev Config Linux.html.vue?vue&type=template&id=e018c65e

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/linux/0 New Dev Config Linux.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\os\\linux\\0 New Dev Config Linux.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _0_New_Dev_Config_Linux_html = (script);

/***/ })

};
;
//# sourceMappingURL=1304.app.js.map