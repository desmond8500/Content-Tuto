"use strict";
exports.id = 8747;
exports.ids = [8747];
exports.modules = {

/***/ 5458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-340b20b4",
  "path": "/dev/angular/Material%20dashboard%20template.html",
  "title": "Material dashbord Template",
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
      "title": "Etapes / Steps",
      "slug": "etapes-steps",
      "children": []
    },
    {
      "level": 2,
      "title": "Source",
      "slug": "source",
      "children": []
    }
  ],
  "filePathRelative": "dev/angular/Material dashboard template.md",
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

/***/ 7125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Material_dashboard_template_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/angular/Material dashboard template.html.vue?vue&type=template&id=041ba717



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="material-dashbord-template" tabindex="-1"><a class="header-anchor" href="#material-dashbord-template" aria-hidden="true">#</a> Material dashbord Template</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><img src="https://s3.amazonaws.com/creativetim_bucket/products/53/original/opt_md_angular_thumbnail.jpg?1551358074" alt="Material Dashboard"> est un super theme admin pour angular.<br> La documentation est disponible <a href="https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial" target="_blank" rel="noopener noreferrer">ici`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><h2 id="etapes-steps" tabindex="-1"><a class="header-anchor" href="#etapes-steps" aria-hidden="true">#</a> Etapes / Steps</h2><ol><li><p>Télécharger la version angular de <a href="https://www.creative-tim.com/product/material-dashboard-angular2" target="_blank" rel="noopener noreferrer">Material Design`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p>Mettre à jour le projet</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>Lancer le projet</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng serve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>Créer une page</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g c maPage
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Il faudra ensuite :</p><ul><li>Ajouter le composant dans le fichier admin.layout.module.ts</li><li>Ajouter la route dans le fichier admin.layout.routing.ts</li><li>Supprimer le composant dans la déclaration du fichier app.route.ts</li><li>Ajouter le template suivant :</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container-fluid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- My content =========================================== --&gt;</span>




      <span class="token comment">&lt;!-- My content =========================================== --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol><li>Modifier le menu Le menu peut être modifié à travers le composant sidebar</li></ol><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><ul><li><a href="https://www.creative-tim.com/product/material-dashboard-angular2" target="_blank" rel="noopener noreferrer">Télécharger Material Dashboard`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Material dashboard template.html.vue?vue&type=template&id=041ba717

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/angular/Material dashboard template.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\angular\\Material dashboard template.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Material_dashboard_template_html = (script);

/***/ })

};
;
//# sourceMappingURL=8747.app.js.map