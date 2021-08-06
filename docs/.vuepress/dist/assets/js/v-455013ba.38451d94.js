"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3188],{8266:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-455013ba",path:"/dev/vue_js/07%20Navigation.html",title:"VUE JS : Navigation Vue JS",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Routage simple d'un composant à l'autre",slug:"routage-simple-d-un-composant-a-l-autre",children:[]},{level:2,title:"Routage avec des paramètres",slug:"routage-avec-des-parametres",children:[]},{level:2,title:"Source",slug:"source",children:[]}],filePathRelative:"dev/vue_js/07 Navigation.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},1034:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});var t=s(6252);const e=(0,t.uE)('<h1 id="vue-js-navigation-vue-js" tabindex="-1"><a class="header-anchor" href="#vue-js-navigation-vue-js" aria-hidden="true">#</a> VUE JS : Navigation Vue JS</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="routage-simple-d-un-composant-a-l-autre" tabindex="-1"><a class="header-anchor" href="#routage-simple-d-un-composant-a-l-autre" aria-hidden="true">#</a> Routage simple d&#39;un composant à l&#39;autre</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="routage-avec-des-parametres" tabindex="-1"><a class="header-anchor" href="#routage-avec-des-parametres" aria-hidden="true">#</a> Routage avec des paramètres</h2><p>Dans le fichier index il faut ajouter la propriété props true sur la route concernée</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> \n    path<span class="token operator">:</span> <span class="token string">&quot;/boutique&quot;</span><span class="token punctuation">,</span> \n    name<span class="token operator">:</span> <span class="token string">&quot;Boutique&quot;</span><span class="token punctuation">,</span> \n    props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span> <span class="token string">&quot;../components/pages/boutiques/boutique.vue&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>sur le composant de départ il faudra définir le nom du composant de base <strong>name</strong> et les paramètres <strong>params</strong>.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name: <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>, params: {boutique} }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>sur le composant de destination</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>  {{ welcome }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Profile&#39;</span><span class="token punctuation">,</span>\n    props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            welcome<span class="token operator">:</span> <span class="token string">&#39;This is your profile&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',12),p={href:"https://dev.to/aligoren/passing-data-to-a-router-link-in-vuejs-2cb0",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("Lien"),l={render:function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",p,[o,(0,t.Wm)(s)])])])],64)}}}}]);