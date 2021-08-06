"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7215],{1850:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-76fc89cf",path:"/dev/laravel/01%20Routage.html",title:"Laravel : Routage",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Utilisation",slug:"utilisation",children:[]},{level:2,title:"Routes",slug:"routes",children:[{level:3,title:"Route avec une fonction",slug:"route-avec-une-fonction",children:[]},{level:3,title:"Route avec une vue",slug:"route-avec-une-vue",children:[]},{level:3,title:"Route avec un controlleur",slug:"route-avec-un-controlleur",children:[]},{level:3,title:"Route avec une nom",slug:"route-avec-une-nom",children:[]}]}],filePathRelative:"dev/laravel/01 Routage.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},1075:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="laravel-routage" tabindex="-1"><a class="header-anchor" href="#laravel-routage" aria-hidden="true">#</a> Laravel : Routage</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Gestion des la navigation.</p><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><p>Dans le fichier <em>routes/web.php</em> il faut créer la route avec le nom.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;fichier/{arg?}&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;IndexController@index&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>La route que nous avons crée :</p><ul><li>fichier = chemin</li><li>arg = argument facultatif</li></ul><p>Et dans un fichier blade nous utilisons le code suivant pour créer un lien avec un argument:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{!! route (<span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span>,[<span class="token punctuation">&#39;</span>arg<span class="token punctuation">&#39;</span> =&gt; <span class="token punctuation">&#39;</span>arg<span class="token punctuation">&#39;</span>]) !!}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Mon lien<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="routes" tabindex="-1"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> Routes</h2><h3 id="route-avec-une-fonction" tabindex="-1"><a class="header-anchor" href="#route-avec-une-fonction" aria-hidden="true">#</a> Route avec une fonction</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users/{id}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="route-avec-une-vue" tabindex="-1"><a class="header-anchor" href="#route-avec-une-vue" aria-hidden="true">#</a> Route avec une vue</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;URI&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;viewName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="route-avec-un-controlleur" tabindex="-1"><a class="header-anchor" href="#route-avec-un-controlleur" aria-hidden="true">#</a> Route avec un controlleur</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users/{id}&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Controller@method&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="route-avec-une-nom" tabindex="-1"><a class="header-anchor" href="#route-avec-une-nom" aria-hidden="true">#</a> Route avec une nom</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;URI&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;viewName&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',19),t={render:function(n,a){return e}}}}]);