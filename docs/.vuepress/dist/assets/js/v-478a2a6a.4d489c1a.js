"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5483],{4286:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-478a2a6a",path:"/dev/ionic/07%20Select%20form.html",title:"Select Form",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Attributs",slug:"attributs",children:[{level:3,title:"Interface",slug:"interface",children:[]}]}],filePathRelative:"dev/ionic/07 Select form.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},220:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="select-form" tabindex="-1"><a class="header-anchor" href="#select-form" aria-hidden="true">#</a> Select Form</h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-item</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-label</span><span class="token punctuation">&gt;</span></span>Action Sheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-label</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select</span> <span class="token attr-name">[interfaceOptions]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customActionSheetOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action-sheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select One<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select-option</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>purple<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Purple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select-option</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yellow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select-option</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Orange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select-option</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select-option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-item</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="attributs" tabindex="-1"><a class="header-anchor" href="#attributs" aria-hidden="true">#</a> Attributs</h2><p>Les attributs permettent de personnaliser notre bouton select.</p><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h3><p>L&#39;attribut interface permet de modifier la façon dont la liste est affichée.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-select</span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action-sheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n      \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-select</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',8),e={render:function(n,a){return t}}}}]);