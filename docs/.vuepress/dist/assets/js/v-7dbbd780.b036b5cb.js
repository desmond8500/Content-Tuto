"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4232],{7967:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7dbbd780",path:"/dev/vue_js/03%20Emit.html",title:"VUE JS : Emit",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Code",slug:"code",children:[]},{level:2,title:"Methode 2",slug:"methode-2",children:[]},{level:2,title:"Auto update",slug:"auto-update",children:[]}],filePathRelative:"dev/vue_js/03 Emit.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},7464:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="vue-js-emit" tabindex="-1"><a class="header-anchor" href="#vue-js-emit" aria-hidden="true">#</a> VUE JS : Emit</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Permet d&#39;envoyer en évènement d&#39;un composant fils vers un composant parent.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p>Coté Child:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8000/api/clients&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n            compte_id<span class="token operator">:</span>      <span class="token keyword">this</span><span class="token punctuation">.</span>compte_id<span class="token punctuation">,</span>\n            nom<span class="token operator">:</span>            <span class="token keyword">this</span><span class="token punctuation">.</span>nom<span class="token punctuation">,</span>\n            description<span class="token operator">:</span>    <span class="token keyword">this</span><span class="token punctuation">.</span>description<span class="token punctuation">,</span>\n            adresse<span class="token operator">:</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>adresse\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;task-added&#39;</span><span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>dismiss <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Coté parent</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-add</span> <span class="token attr-name">@task-added</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-add</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">getResults</span><span class="token punctuation">(</span><span class="token parameter">page <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8000/api/clients?page=&#39;</span> <span class="token operator">+</span> page<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span>clients <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token parameter">clients</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getResults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="methode-2" tabindex="-1"><a class="header-anchor" href="#methode-2" aria-hidden="true">#</a> Methode 2</h2><p>dans le coposant fils</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>btn btn-primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>chosenItem<span class="token punctuation">&#39;</span>, value)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            {{item}}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>\n        props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Dans le composant parent</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span>  <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>listdata<span class="token punctuation">&#39;</span></span> <span class="token attr-name">@chosenItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getItem<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&#39;./child.vue&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>\n        components<span class="token operator">:</span> <span class="token punctuation">[</span> \n            child\n        <span class="token punctuation">]</span>\n        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                listdata<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    name<span class="token operator">:</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">,</span>\n                    grade<span class="token operator">:</span> <span class="token string">&#39;junin&#39;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                myvalue<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        methods<span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>myvalue <span class="token operator">=</span> value<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="auto-update" tabindex="-1"><a class="header-anchor" href="#auto-update" aria-hidden="true">#</a> Auto update</h2><p>Coté parent</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-add</span> <span class="token attr-name">@client</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getClient<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-add</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        clients<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">getClient</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>clients <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>clients<span class="token punctuation">,</span> client<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>coté fils</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>store<span class="token punctuation">&#39;</span></span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ajouter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/projet__clients&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n                name<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n                description<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>description<span class="token punctuation">,</span>\n                adress<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>address<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;client&#39;</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>logo <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',18),t={render:function(n,s){return p}}}}]);