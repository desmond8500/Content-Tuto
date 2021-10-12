"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8945],{22:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-68f69240",path:"/dev/laravel/phpword.html",title:"PHPWORD",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Utilisation avec livewire",slug:"utilisation-avec-livewire",children:[{level:3,title:"Générer un fichier",slug:"generer-un-fichier",children:[]},{level:3,title:"Remplir un fichier",slug:"remplir-un-fichier",children:[]}]},{level:2,title:"Source",slug:"source",children:[]}],filePathRelative:"dev/laravel/phpword.md",git:{updatedTime:1632814725e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:2}]}}},1559:(n,a,s)=>{s.r(a),s.d(a,{default:()=>u});var e=s(6252);const t=(0,e.uE)('<h1 id="phpword" tabindex="-1"><a class="header-anchor" href="#phpword" aria-hidden="true">#</a> PHPWORD</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Package laravel qui permet de générer des documents word.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require phpoffice/phpword\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation-avec-livewire" tabindex="-1"><a class="header-anchor" href="#utilisation-avec-livewire" aria-hidden="true">#</a> Utilisation avec livewire</h2><h3 id="generer-un-fichier" tabindex="-1"><a class="header-anchor" href="#generer-un-fichier" aria-hidden="true">#</a> Générer un fichier</h3><p>IL suffit de créer une methode comme celle qui suit :</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getdoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token variable">$phpWord</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpWord<span class="token punctuation">\\</span>PhpWord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$section</span> <span class="token operator">=</span> <span class="token variable">$phpWord</span><span class="token operator">-&gt;</span><span class="token function">addSection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token variable">$section</span><span class="token operator">-&gt;</span><span class="token function">addText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$objWriter</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpWord<span class="token punctuation">\\</span>IOFactory</span><span class="token operator">::</span><span class="token function">createWriter</span><span class="token punctuation">(</span><span class="token variable">$phpWord</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Word2007&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$objWriter</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Appdividend.docx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Appdividend.docx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="remplir-un-fichier" tabindex="-1"><a class="header-anchor" href="#remplir-un-fichier" aria-hidden="true">#</a> Remplir un fichier</h3><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',11),p={href:"https://appdividend.com/2018/04/23/how-to-create-word-document-file-in-laravel/",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("Laravel word"),o={href:"https://github.com/PHPOffice/PHPWord",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Github"),r={href:"https://phpword.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Documentation"),u={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",p,[i,(0,e.Wm)(s)])]),(0,e.Wm)("li",null,[(0,e.Wm)("a",o,[l,(0,e.Wm)(s)])]),(0,e.Wm)("li",null,[(0,e.Wm)("a",r,[c,(0,e.Wm)(s)])])])],64)}}}}]);