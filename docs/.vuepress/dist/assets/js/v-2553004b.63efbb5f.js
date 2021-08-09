"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4504],{4240:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-2553004b",path:"/dev/laravel/Plugin%20Parsedown.html",title:"Laravel : Parsedown",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Sources",slug:"sources",children:[]}],filePathRelative:"dev/laravel/Plugin Parsedown.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},1626:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var n=s(6252);const r=(0,n.uE)('<h1 id="laravel-parsedown" tabindex="-1"><a class="header-anchor" href="#laravel-parsedown" aria-hidden="true">#</a> Laravel : Parsedown</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Parsedown permet de parser du Markdown.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Pour que cela marche il faut modifier le parsing des balises de code.<br> Par défaut la classe utilisée est <code>class= &quot;language-html&quot;</code>. Il faut enlever la partie <code>language</code> dans le fichier <code>Parsedown.php</code> d&#39;Erusev qui est dans <code>vendor/parsedown/Parsedown.php</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$class</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;language-&#39;</span><span class="token operator">.</span><span class="token variable">$language</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>par</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$class</span> <span class="token operator">=</span> <span class="token variable">$language</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h2>',9),l={href:"https://parsedown.org/",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("Source"),i={render:function(e,a){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("a",l,[t,(0,n.Wm)(s)])])])],64)}}}}]);