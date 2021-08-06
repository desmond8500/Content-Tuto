"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8350],{6924:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-cc8aa57e",path:"/dev/laravel/10%20G%C3%A9n%C3%A9rer%20des%20PDFs.html",title:"Laravel : Générateur de fichiers PDF",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Installation",slug:"installation",children:[]}],filePathRelative:"dev/laravel/10 Générer des PDFs.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},5948:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252);const p=(0,e.Wm)("h1",{id:"laravel-generateur-de-fichiers-pdf",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#laravel-generateur-de-fichiers-pdf","aria-hidden":"true"},"#"),(0,e.Uk)(" Laravel : Générateur de fichiers PDF")],-1),t=(0,e.Wm)("h2",{id:"description",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),(0,e.Uk)(" Description")],-1),l=(0,e.Uk)("Nous avons parfois besoin de générer des fichiers PDFs pour des devis, des factures etc."),o=(0,e.Wm)("br",null,null,-1),r=(0,e.Uk)(" Ici nous allons monter comment faire cela avec Laravel et la librairie "),c={href:"https://github.com/barryvdh/laravel-dompdf",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("barryvdh"),u=(0,e.Uk)(" ."),d=(0,e.Wm)("h2",{id:"installation",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,e.Uk)(" Installation")],-1),k={href:"https://www.itsolutionstuff.com/post/laravel-57-generate-pdf-from-html-exampleexample.html",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("Source"),m=(0,e.uE)('<ol><li>Installer la librairie</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require barryvdh/laravel-dompdf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>Configurer la librairie dans le fichier <code>/config/app.php</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;providers&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">..</span><span class="token punctuation">..</span>\n\tBarryvdh<span class="token punctuation">\\</span>DomPDF<span class="token punctuation">\\</span>ServiceProvider::class,\n<span class="token punctuation">]</span>,\n\n<span class="token string">&#39;aliases&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">..</span><span class="token punctuation">..</span>\n\t<span class="token string">&#39;PDF&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> Barryvdh<span class="token punctuation">\\</span>DomPDF<span class="token punctuation">\\</span>Facade::class,\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li>Créer une route vers un controlleur</li><li>Créer un controlleur pour gérer la conversion</li><li>Créer une vue blade qui sera affichée</li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">PDF</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">generatePDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token punctuation">{</span>\n        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Welcome to HDTuto.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token variable">$pdf</span> <span class="token operator">=</span> <span class="token class-name static-context">PDF</span><span class="token operator">::</span><span class="token function">loadView</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;myPDF&#39;</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token variable">$pdf</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>La variable <code>$data</code> est utilisée pour envoyer des données vers la vue.<br><code>myPDF</code> est la vue blade qui sera convertie en PDF.<br><code>test.php</code> est le fichier qui sera généré</p>',7),h={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,t,(0,e.Wm)("p",null,[l,o,r,(0,e.Wm)("a",c,[i,(0,e.Wm)(a)]),u]),d,(0,e.Wm)("p",null,[(0,e.Wm)("a",k,[b,(0,e.Wm)(a)])]),m],64)}}}}]);