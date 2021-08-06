"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4509],{2586:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7dc8ff4a",path:"/dev/vue_js/09%20Methodes.html",title:"VUE JS : Methodes",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Watch",slug:"watch",children:[]},{level:2,title:"Map",slug:"map",children:[]}],filePathRelative:"dev/vue_js/09 Methodes.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},5350:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="vue-js-methodes" tabindex="-1"><a class="header-anchor" href="#vue-js-methodes" aria-hidden="true">#</a> VUE JS : Methodes</h1><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> Watch</h2><p>Permet de surveiller des variables ou des expression afin de pouvoir agir en conséquence.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n\n<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    b<span class="token operator">:</span> <span class="token number">2</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  watch<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">valeur<span class="token punctuation">,</span> ancienneValeur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nouveau: %s, ancien: %s&#39;</span><span class="token punctuation">,</span> valeur<span class="token punctuation">,</span> ancienneValeur<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// nom d&#39;une méthode</span>\n    b<span class="token operator">:</span> <span class="token string">&#39;uneMéthode&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// la fonction de rappel sera appelée quelque soit les changements des propriétés de l&#39;objet observé indépendamment de leur profondeur</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nvm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// =&gt; nouveau : 2, ancien : 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>Permet de mettre à jour un objet.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>image2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>images<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        src<span class="token operator">:</span> <span class="token string">&#39;storage/&#39;</span><span class="token operator">+</span> item<span class="token punctuation">.</span>folder<span class="token punctuation">,</span>\n        thumb<span class="token operator">:</span><span class="token string">&#39;storage/&#39;</span><span class="token operator">+</span> item<span class="token punctuation">.</span>folder<span class="token punctuation">,</span>\n        subHtml<span class="token operator">:</span><span class="token string">&#39;caption&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',7),p={render:function(n,s){return e}}}}]);