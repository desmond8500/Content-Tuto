"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7411],{9485:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2c3c45d2",path:"/dev/angular/Angular.html",title:"Angular",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Utilisation du CLI",slug:"utilisation-du-cli",children:[]},{level:2,title:"Gestion des routes",slug:"gestion-des-routes",children:[]}],filePathRelative:"dev/angular/Angular.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},8789:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h1><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="utilisation-du-cli" tabindex="-1"><a class="header-anchor" href="#utilisation-du-cli" aria-hidden="true">#</a> Utilisation du CLI</h2><p>Pour créer un composant :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g c nom_du_composant\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>g = generate</li><li>c = component</li></ul><p>Pour créer un composant dans d&#39;autres composants</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g c dossier/sousdossier\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Pour un service</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ng g <span class="token function">service</span> nom_du_service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>La suppresion se fait manuellement. Il supprimer les fichiers et mettre à jour le fichier <strong>app.Module.ts</strong></p><h2 id="gestion-des-routes" tabindex="-1"><a class="header-anchor" href="#gestion-des-routes" aria-hidden="true">#</a> Gestion des routes</h2><p>Les liens doivent être faits comme suit :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">routerLink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ma super route<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Voilà un modèle de routing</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> RouterModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/router&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> TicketsComponent <span class="token punctuation">}</span>     <span class="token keyword">from</span> <span class="token string">&#39;./page/tickets/tickets.component&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routes<span class="token operator">:</span> Routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> DashboardComponent <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>RouterModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  exports<span class="token operator">:</span> <span class="token punctuation">[</span>RouterModule<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppRoutingModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',16),t={render:function(n,s){return e}}}}]);