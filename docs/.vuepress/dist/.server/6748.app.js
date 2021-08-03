"use strict";
exports.id = 6748;
exports.ids = [6748];
exports.modules = {

/***/ 1009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4fd3725c",
  "path": "/dev/javascript/Select2.html",
  "title": "Select 2",
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
      "title": "Installation",
      "slug": "installation",
      "children": []
    },
    {
      "level": 2,
      "title": "Utilisation avec un select",
      "slug": "utilisation-avec-un-select",
      "children": []
    },
    {
      "level": 2,
      "title": "Source",
      "slug": "source",
      "children": []
    }
  ],
  "filePathRelative": "dev/javascript/Select2.md",
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

/***/ 5822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Select2_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/javascript/Select2.html.vue?vue&type=template&id=2ac4bd26



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="select-2" tabindex="-1"><a class="header-anchor" href="#select-2" aria-hidden="true">#</a> Select 2</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>C&#39;est une librairie Javascript qui permet de faire des types de select assez stylisés</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Vous pouvez utiliser le CDN</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="utilisation-avec-un-select" tabindex="-1"><a class="header-anchor" href="#utilisation-avec-un-select" aria-hidden="true">#</a> Utilisation avec un select</h2><p>Dans le controlleur d&#39;affichage:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token variable">\$citation_tags</span> <span class="token operator">=</span> <span class="token class-name static-context">Tag</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$tag_array</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">\$citation_tags</span> <span class="token keyword">as</span> <span class="token variable">\$key</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">\$tag_array</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">\$tags</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&lt;script&gt; var data = &quot;</span><span class="token operator">.</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">\$tag_array</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot; &lt;/script&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Dans le fichier html:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-group col-md-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Tags<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    {!! \$tags !!}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag[]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control select2<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Dans le fihcier js de configuration de Select2 :</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">\$</span><span class="token punctuation">(</span><span class="token string">&#39;.select2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select2</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token string">&#39;Selectionnez un tag&#39;</span><span class="token punctuation">,</span>
        allowClear<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        tags<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        tokenSeparators<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Dans le controlleur de stockage :</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tag_list</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token property">tag</span> <span class="token keyword">as</span> <span class="token variable">\$key</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">is_numeric</span><span class="token punctuation">(</span><span class="token variable">\$tag</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">\$new_tag</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">\$new_tag</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">\$tag</span><span class="token punctuation">;</span>
        <span class="token variable">\$new_tag</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">\$tag</span> <span class="token operator">=</span> <span class="token variable">\$new_tag</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">\$tag_list</span><span class="token punctuation">,</span> <span class="token variable">\$tag</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">array_shift</span><span class="token punctuation">(</span><span class="token variable">\$tag_list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$input</span> <span class="token operator">=</span> <span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tag&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">\$tag_list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$citation</span> <span class="token operator">=</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token property">citationRepository</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$input</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Flash</span><span class="token operator">::</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Citation saved successfully.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><ul><li><a href="https://select2.org/" target="_blank" rel="noopener noreferrer">Select2.org`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/javascript/Select2.html.vue?vue&type=template&id=2ac4bd26

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/javascript/Select2.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\javascript\\Select2.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Select2_html = (script);

/***/ })

};
;
//# sourceMappingURL=6748.app.js.map