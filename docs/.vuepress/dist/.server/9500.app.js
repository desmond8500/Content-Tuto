"use strict";
exports.id = 9500;
exports.ids = [9500];
exports.modules = {

/***/ 8209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7ee4bed0",
  "path": "/os/ubuntu_server.html",
  "title": "ubuntu server",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
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
      "title": "Sqlite3",
      "slug": "sqlite3",
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
      "title": "Virtual box",
      "slug": "virtual-box",
      "children": []
    },
    {
      "level": 2,
      "title": "Sources",
      "slug": "sources",
      "children": []
    }
  ],
  "filePathRelative": "os/ubuntu_server.md",
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

/***/ 1378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ubuntu_server_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/os/ubuntu_server.html.vue?vue&type=template&id=b5939890



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="ubuntu-server" tabindex="-1"><a class="header-anchor" href="#ubuntu-server" aria-hidden="true">#</a> ubuntu server</h1><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> Apache</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apache2 build-essential
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php libapache2-mod-php php-curl php-gd php-intl php-json php-mbstring php-xml php-zip  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sqlite3" tabindex="-1"><a class="header-anchor" href="#sqlite3" aria-hidden="true">#</a> Sqlite3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> sqlite3 php-sqlite3
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Il faut activer les extensions:</p><ul><li>curl</li><li>pdo_mysql</li><li>pdo_sqlite</li><li>sqlite3</li></ul><p>La modification du fichier php.ini peut ne pas marcher, il faudra faire les modification au niveau d&#39;apache.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/apache2/sites-available/000-default.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ajouter le code suivant :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    php_value upload_max_filesize 8G
    php_value post_max_size 2G
    php_value memory_limit -1
    php_value max_file_uploads <span class="token number">1000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Redemmarer le serveur apache</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> apache2 restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><a href="https://serverfault.com/questions/723801/upload-max-filesize-php-ini-or-apache-virtual-host-entry" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="autres-logiciels-utiles" tabindex="-1"><a class="header-anchor" href="#autres-logiciels-utiles" aria-hidden="true">#</a> Autres logiciels utiles</h2><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3><div class="language-language ext-language line-numbers-mode"><pre class="language-language"><code>sudo apt-get install git 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer" aria-hidden="true">#</a> Composer</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">composer</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="open-shh-server" tabindex="-1"><a class="header-anchor" href="#open-shh-server" aria-hidden="true">#</a> Open shh server</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="virtual-box" tabindex="-1"><a class="header-anchor" href="#virtual-box" aria-hidden="true">#</a> Virtual box</h2><p>Nous allons faire de la redirection de port</p><p><a href="https://www.techrepublic.com/article/how-to-use-port-forwarding-in-virtualbox/" target="_blank" rel="noopener noreferrer">port fowarding`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h2><ul><li><a href="https://doc.ubuntu-fr.org/lamp" target="_blank" rel="noopener noreferrer">Ubuntu.fr`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/ubuntu_server.html.vue?vue&type=template&id=b5939890

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/os/ubuntu_server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\os\\ubuntu_server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const ubuntu_server_html = (script);

/***/ })

};
;
//# sourceMappingURL=9500.app.js.map