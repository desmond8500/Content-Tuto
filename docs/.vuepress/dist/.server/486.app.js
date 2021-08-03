"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 1279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-595ab314",
  "path": "/os/linux/Lamp.html",
  "title": "Installation d'un serveur web Sous linux",
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
      "title": "Apache",
      "slug": "apache",
      "children": []
    },
    {
      "level": 2,
      "title": "PHP",
      "slug": "php",
      "children": []
    },
    {
      "level": 2,
      "title": "MySQL",
      "slug": "mysql",
      "children": []
    },
    {
      "level": 2,
      "title": "Maria DB",
      "slug": "maria-db",
      "children": []
    },
    {
      "level": 2,
      "title": "Phpmyadmin",
      "slug": "phpmyadmin",
      "children": []
    },
    {
      "level": 2,
      "title": "Configuration de lancement",
      "slug": "configuration-de-lancement",
      "children": []
    },
    {
      "level": 2,
      "title": "Configuration de PHP",
      "slug": "configuration-de-php",
      "children": []
    },
    {
      "level": 2,
      "title": "Autres logiciels utiles",
      "slug": "autres-logiciels-utiles",
      "children": [
        {
          "level": 3,
          "title": "Git",
          "slug": "git",
          "children": []
        },
        {
          "level": 3,
          "title": "Composer",
          "slug": "composer",
          "children": []
        },
        {
          "level": 3,
          "title": "Open shh server",
          "slug": "open-shh-server",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Sources",
      "slug": "sources",
      "children": []
    }
  ],
  "filePathRelative": "os/linux/Lamp.md",
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

/***/ 3891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Lamp_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/os/linux/Lamp.html.vue?vue&type=template&id=0f9a0e12



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="installation-d-un-serveur-web-sous-linux" tabindex="-1"><a class="header-anchor" href="#installation-d-un-serveur-web-sous-linux" aria-hidden="true">#</a> Installation d&#39;un serveur web Sous linux</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> Apache</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apache2 build-essential
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php libapache2-mod-php php-curl php-gd php-intl php-json php-mbstring php-xml php-zip sqlite3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server php-mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="maria-db" tabindex="-1"><a class="header-anchor" href="#maria-db" aria-hidden="true">#</a> Maria DB</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mariadb-server php-mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin" aria-hidden="true">#</a> Phpmyadmin</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-myadmin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="configuration-de-lancement" tabindex="-1"><a class="header-anchor" href="#configuration-de-lancement" aria-hidden="true">#</a> Configuration de lancement</h2><p>Pour empêcher le demmarage automatique il faut :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl disable apache2
<span class="token function">sudo</span> systemctl disable mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Pour le lancement manuel</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start apache2
<span class="token function">sudo</span> systemctl start mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Pour réactiver le demmarage automatique.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> apache2
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="configuration-de-php" tabindex="-1"><a class="header-anchor" href="#configuration-de-php" aria-hidden="true">#</a> Configuration de PHP</h2><p>Pour que <strong>PHP</strong> fonctionne correctement il faut activer certaines extensions utiles. Il faut pour cela éditer le fichier <code>php.ini</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/php/7.2/cli/php.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Il faut activer les extensions:</p><ul><li>curl</li><li>pdo_mysql</li><li>pdo_sqlite</li><li>sqlite3</li></ul><h2 id="autres-logiciels-utiles" tabindex="-1"><a class="header-anchor" href="#autres-logiciels-utiles" aria-hidden="true">#</a> Autres logiciels utiles</h2><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3><div class="language-language ext-language line-numbers-mode"><pre class="language-language"><code>sudo apt-get install git 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer" aria-hidden="true">#</a> Composer</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">composer</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="open-shh-server" tabindex="-1"><a class="header-anchor" href="#open-shh-server" aria-hidden="true">#</a> Open shh server</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h2><ul><li><a href="https://doc.ubuntu-fr.org/lamp" target="_blank" rel="noopener noreferrer">Ubuntu.fr`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/linux/Lamp.html.vue?vue&type=template&id=0f9a0e12

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/linux/Lamp.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\os\\linux\\Lamp.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Lamp_html = (script);

/***/ })

};
;
//# sourceMappingURL=486.app.js.map