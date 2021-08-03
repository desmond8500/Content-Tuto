"use strict";
exports.id = 9096;
exports.ids = [9096];
exports.modules = {

/***/ 2571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e4a9aac",
  "path": "/dev/laravel/17%20Tags.html",
  "title": "Laravel : Gestion des tags",
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
      "title": "Code",
      "slug": "code",
      "children": []
    }
  ],
  "filePathRelative": "dev/laravel/17 Tags.md",
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

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _17_Tags_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dev/laravel/17 Tags.html.vue?vue&type=template&id=17adbefc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="laravel-gestion-des-tags" tabindex="-1"><a class="header-anchor" href="#laravel-gestion-des-tags" aria-hidden="true">#</a> Laravel : Gestion des tags</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p>Nous avons utilisé la librairie Select2 pour rendre l&#39;input du tag dynamique. Il faudra donc l&#39;importer sur le projet et le configurer.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">\$</span><span class="token punctuation">(</span><span class="token string">&#39;.select2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select2</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token string">&#39;Selectionnez un tag&#39;</span><span class="token punctuation">,</span>
        allowClear<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        tags<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        tokenSeparators<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Affichage au niveau du controlleur</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">\$my_tags</span> <span class="token operator">=</span> <span class="token class-name static-context">Tag</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">\$tag_array</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">\$my_tags</span> <span class="token keyword">as</span> <span class="token variable">\$key</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">\$tag_array</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$tag</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token variable">\$tags</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&lt;script&gt; var data = &quot;</span><span class="token operator">.</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">\$tag_array</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot; &lt;/script&gt;&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1 Quotes.index&#39;</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tags&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Affichage coté Coté HTML</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-group col-md-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Tags<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    {!! \$tags !!}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag[]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control select2<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Stokage au niveau du controleur</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tag_list</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>

<span class="token variable">\$input</span> <span class="token operator">=</span> <span class="token variable">\$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tag&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">\$tag_list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dev/laravel/17 Tags.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\Projets\\Content-Tuto\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projets\\Content-Tuto\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projets\\Content-Tuto\\docs\\.vuepress\\.temp\\pages\\dev\\laravel\\17 Tags.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const _17_Tags_html = (script);

/***/ })

};
;
//# sourceMappingURL=9096.app.js.map