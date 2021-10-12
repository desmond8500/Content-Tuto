"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8665],{5818:(s,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-372956ff",path:"/dev/vue_js/01%20Bases.html",title:"Vue JS: Fonctionalités de base",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Conditions",slug:"conditions",children:[]},{level:2,title:"Boucles",slug:"boucles",children:[]},{level:2,title:"Formulaires",slug:"formulaires",children:[]},{level:2,title:"Boucles",slug:"boucles-1",children:[]}],filePathRelative:"dev/vue_js/01 Bases.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},2009:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="vue-js-fonctionalites-de-base" tabindex="-1"><a class="header-anchor" href="#vue-js-fonctionalites-de-base" aria-hidden="true">#</a> Vue JS: Fonctionalités de base</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="conditions" tabindex="-1"><a class="header-anchor" href="#conditions" aria-hidden="true">#</a> Conditions</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>seen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Now you see me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#app-3&#39;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    seen<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="boucles" tabindex="-1"><a class="header-anchor" href="#boucles" aria-hidden="true">#</a> Boucles</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      { { todo.text }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#app-4&#39;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    todos<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Learn JavaScript&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Learn Vue&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Build something awesome&#39;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="formulaires" tabindex="-1"><a class="header-anchor" href="#formulaires" aria-hidden="true">#</a> Formulaires</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{ { message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#app-6&#39;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    message<span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="boucles-1" tabindex="-1"><a class="header-anchor" href="#boucles-1" aria-hidden="true">#</a> Boucles</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',14),p={render:function(s,n){return t}}}}]);