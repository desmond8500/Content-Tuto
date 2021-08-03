"use strict";
exports.id = 4025;
exports.ids = [4025];
exports.modules = {

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-34e4c304",
  "path": "/dev/php/Dates.html",
  "title": "PHP: Dates",
  "lang": "fr-FR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Nombre de jours entre deux dates",
      "slug": "nombre-de-jours-entre-deux-dates",
      "children": []
    }
  ],
  "filePathRelative": "dev/php/Dates.md",
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

/***/ 5283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dates_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/php/Dates.html.vue?vue&type=template&id=1396e9da



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="php-dates" tabindex="-1"><a class="header-anchor" href="#php-dates" aria-hidden="true">#</a> PHP: Dates</h1><h2 id="nombre-de-jours-entre-deux-dates" tabindex="-1"><a class="header-anchor" href="#nombre-de-jours-entre-deux-dates" aria-hidden="true">#</a> Nombre de jours entre deux dates</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$date</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Date du jour</span>
<span class="token variable">\$date1</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$dateTimestamp1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Date de debut </span>
<span class="token variable">\$date2</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Convertion de la date en timestamp</span>

<span class="token variable">\$nbJoursTimestamp</span> <span class="token operator">=</span> <span class="token variable">\$date2</span> <span class="token operator">-</span> <span class="token variable">\$date1</span><span class="token punctuation">;</span> <span class="token comment">// difference</span>
<span class="token variable">\$nbJours</span> <span class="token operator">=</span> <span class="token variable">\$nbJoursTimestamp</span> <span class="token operator">/</span> <span class="token number">86400</span><span class="token punctuation">;</span> <span class="token comment">// conversion en jours</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Récupérer la différence de jours entre une date et la date actuelle.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDays</span><span class="token punctuation">(</span><span class="token variable">\$date</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">\$today</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$date1</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$date2</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$today</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">\$date2</span> <span class="token operator">-</span> <span class="token variable">\$date1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">86400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$now</span>   <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$date2</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2012-08-14 16:01:05&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$diff</span>  <span class="token operator">=</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token variable">\$date1</span> <span class="token operator">-</span> <span class="token variable">\$date2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Calculer la différence de jours entre deux dates.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">dateDiff</span><span class="token punctuation">(</span><span class="token variable">\$start</span><span class="token punctuation">,</span><span class="token variable">\$end</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">\$date1</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$start</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$date2</span> <span class="token operator">=</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">\$end</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">\$nbJoursTimestamp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">\$date2</span> <span class="token operator">-</span> <span class="token variable">\$date1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">86400</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$nbJours</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://openclassrooms.com/forum/sujet/nombre-de-jours-entre-2-dates-31730" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><a href="http://www.finalclap.com/faq/110-php-calcul-difference-deux-date" target="_blank" rel="noopener noreferrer">Source`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/php/Dates.html.vue?vue&type=template&id=1396e9da

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/php/Dates.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\php\\Dates.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Dates_html = (script);

/***/ })

};
;
//# sourceMappingURL=4025.app.js.map