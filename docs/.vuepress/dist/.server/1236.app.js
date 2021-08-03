"use strict";
exports.id = 1236;
exports.ids = [1236];
exports.modules = {

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-68cb60b7",
  "path": "/dev/ionic/Capacitor.html",
  "title": "Capacitor",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Projet existant",
      "slug": "projet-existant",
      "children": []
    },
    {
      "level": 2,
      "title": "Installer google map",
      "slug": "installer-google-map",
      "children": []
    },
    {
      "level": 2,
      "title": "new project",
      "slug": "new-project",
      "children": []
    },
    {
      "level": 2,
      "title": "workflow",
      "slug": "workflow",
      "children": []
    },
    {
      "level": 2,
      "title": "Live run",
      "slug": "live-run",
      "children": []
    }
  ],
  "filePathRelative": "dev/ionic/Capacitor.md",
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

/***/ 2628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Capacitor_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/ionic/Capacitor.html.vue?vue&type=template&id=90b0f9cc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="capacitor" tabindex="-1"><a class="header-anchor" href="#capacitor" aria-hidden="true">#</a> Capacitor</h1><h2 id="projet-existant" tabindex="-1"><a class="header-anchor" href="#projet-existant" aria-hidden="true">#</a> Projet existant</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  ionic integrations enable capacitor
  ionic build
  npx cap add android
  npx cap open android
  npx cap copy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="installer-google-map" tabindex="-1"><a class="header-anchor" href="#installer-google-map" aria-hidden="true">#</a> Installer google map</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  npm install @ionic-native/core@beta @ionic-native/google-maps@beta
  ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID=&quot;...&quot; --variable API_KEY_FOR_IOS=&quot;...&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="new-project" tabindex="-1"><a class="header-anchor" href="#new-project" aria-hidden="true">#</a> new project</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic start myApp tabs --capacitor
ionic build
npx cap add android
npx cap open android
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> workflow</h2><p>Compiler</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>exporter les assets</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx cap copy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>créer un dossier android</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx cap add android
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>exécuter</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx cap open android
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="live-run" tabindex="-1"><a class="header-anchor" href="#live-run" aria-hidden="true">#</a> Live run</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ionic build
ionic cap <span class="token function">add</span> android
ionic cap copy
ionic cap <span class="token function">sync</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/ionic/Capacitor.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\ionic\\Capacitor.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Capacitor_html = (script);

/***/ })

};
;
//# sourceMappingURL=1236.app.js.map