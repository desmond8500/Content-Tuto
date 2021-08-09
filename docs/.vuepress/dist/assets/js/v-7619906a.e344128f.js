"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2671],{5584:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-7619906a",path:"/dev/angular/Markdown.html",title:"NGX Markdown",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Utilisation",slug:"utilisation",children:[{level:3,title:"Html",slug:"html",children:[]},{level:3,title:"App-modules.Module",slug:"app-modules-module",children:[]},{level:3,title:"Angular.json",slug:"angular-json",children:[]}]}],filePathRelative:"dev/angular/Markdown.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},1512:(n,a,s)=>{s.r(a),s.d(a,{default:()=>r});var e=s(6252);const t=(0,e.Wm)("h1",{id:"ngx-markdown",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#ngx-markdown","aria-hidden":"true"},"#"),(0,e.Uk)(" NGX Markdown")],-1),l={href:"https://www.npmjs.com/package/ngx-markdown",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("Source"),o=(0,e.uE)('<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-cli ext-cli line-numbers-mode"><pre class="language-cli"><code>  npm install ngx-markdown --save\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation" tabindex="-1"><a class="header-anchor" href="#utilisation" aria-hidden="true">#</a> Utilisation</h2><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> Html</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>markdown</span> <span class="token attr-name">[src]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>assets/markdown/test.md<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>markdown</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="app-modules-module" tabindex="-1"><a class="header-anchor" href="#app-modules-module" aria-hidden="true">#</a> App-modules.Module</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClientModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MarkdownModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ngx-markdown&#39;</span><span class="token punctuation">;</span>\n\n\nimports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    HttpClientModule<span class="token punctuation">,</span>\n    MarkdownModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="angular-json" tabindex="-1"><a class="header-anchor" href="#angular-json" aria-hidden="true">#</a> Angular.json</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&quot;node_modules/marked/lib/marked.js&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',9),r={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[(0,e.Wm)("a",l,[p,(0,e.Wm)(s)])]),o],64)}}}}]);