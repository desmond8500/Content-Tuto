"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2186efe5",
  "path": "/cms/odoo.html",
  "title": "Odoo 12",
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
      "title": "Installation Odoo 13",
      "slug": "installation-odoo-13",
      "children": [
        {
          "level": 3,
          "title": "Environnement",
          "slug": "environnement",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Installation online",
      "slug": "installation-online",
      "children": []
    },
    {
      "level": 2,
      "title": "Bugs",
      "slug": "bugs",
      "children": [
        {
          "level": 3,
          "title": "Editer des contacts",
          "slug": "editer-des-contacts",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Liens d'exploitation",
      "slug": "liens-d-exploitation",
      "children": []
    }
  ],
  "filePathRelative": "cms/odoo.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}


/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ odoo_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/cms/odoo.html.vue?vue&type=template&id=7081ab6a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="odoo-12" tabindex="-1"><a class="header-anchor" href="#odoo-12" aria-hidden="true">#</a> Odoo 12</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Odoo est un CRM assez complet qui permet de faire plein de choses notament la gestion d&#39;entreprise etc.</p><h2 id="installation-odoo-13" tabindex="-1"><a class="header-anchor" href="#installation-odoo-13" aria-hidden="true">#</a> Installation Odoo 13</h2><h3 id="environnement" tabindex="-1"><a class="header-anchor" href="#environnement" aria-hidden="true">#</a> Environnement</h3><p>Nous allons installer Odoo sur un serveur virtuel sous VirtualBox avec Ubuntu 18.04 server comme OS.<br> Au moment de l&#39;installation il faudra veiller à ne pas utilise &quot;odoo&quot; comme nom d&#39;utilisateur.<br> Nous allons installer <strong>Openssh-server</strong> pour pouvoir travailler plus facilement.</p><h2 id="installation-online" tabindex="-1"><a class="header-anchor" href="#installation-online" aria-hidden="true">#</a> Installation online</h2><ol><li>Créer un compte chez <a href="http://alwaysdata.com/" target="_blank" rel="noopener noreferrer">Alwaysdata`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>;</li><li>Créer le site odoo à partir de l&#39;installateur, il faudra faire une migration de posgrestsql avant de procéder à l&#39;installation</li><li>Les identifiants par défaut sont : <strong>admin/admin</strong></li><li>Changer la langue</li><li>Configurer le serveur mail <a href="https://www.odoo.com/fr_FR/forum/aide-1/question/incoming-outgoing-mail-configuration-44842" target="_blank" rel="noopener noreferrer">lien`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ol><h2 id="bugs" tabindex="-1"><a class="header-anchor" href="#bugs" aria-hidden="true">#</a> Bugs</h2><h3 id="editer-des-contacts" tabindex="-1"><a class="header-anchor" href="#editer-des-contacts" aria-hidden="true">#</a> Editer des contacts</h3><p>Pour pouvoir créer et éditer des utilisateurs il faut :</p><ul><li>Activer le <strong>mode développeur</strong> (dans le menu de configuration)</li><li>Aller dans la section <strong>Facture</strong> puis <strong>Configuration</strong></li><li>Installer un plan comptable (HOADA pour l&#39;Afrique de l&#39;ouest)</li></ul><h2 id="liens-d-exploitation" tabindex="-1"><a class="header-anchor" href="#liens-d-exploitation" aria-hidden="true">#</a> Liens d&#39;exploitation</h2><p><a href="http://localhost:8069" target="_blank" rel="noopener noreferrer">Lien web Local`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><br><a href="http://localhost:8069/web/database/manager" target="_blank" rel="noopener noreferrer">Administration de la base de données`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/cms/odoo.html.vue?vue&type=template&id=7081ab6a

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/cms/odoo.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Tuto2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Tuto2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Tuto2\\docs\\.vuepress\\.temp\\pages\\cms\\odoo.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const odoo_html = (script);

/***/ })

};
;
//# sourceMappingURL=850.app.js.map