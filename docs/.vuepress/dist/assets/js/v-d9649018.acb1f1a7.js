"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9613],{3897:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-d9649018",path:"/dev/laravel/13%20Faker.html",title:"Laravel : Faker",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Description",slug:"description",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Utilisation dans un controlleur",slug:"utilisation-dans-un-controlleur",children:[]}],filePathRelative:"dev/laravel/13 Faker.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},7687:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="laravel-faker" tabindex="-1"><a class="header-anchor" href="#laravel-faker" aria-hidden="true">#</a> Laravel : Faker</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Permet de générer des données génériques pour remplir une base de donnée.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require fzaninotto/faker\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="utilisation-dans-un-controlleur" tabindex="-1"><a class="header-anchor" href="#utilisation-dans-un-controlleur" aria-hidden="true">#</a> Utilisation dans un controlleur</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\\</span>Factory</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Client</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">SeedController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">clients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token variable">$faker</span> <span class="token operator">=</span> <span class="token class-name static-context">Faker</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;fr_FR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$seed</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$seed</span><span class="token operator">-&gt;</span><span class="token property">compte_id</span>    <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token variable">$seed</span><span class="token operator">-&gt;</span><span class="token property">nom</span>          <span class="token operator">=</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">company</span><span class="token punctuation">;</span>\n        <span class="token variable">$seed</span><span class="token operator">-&gt;</span><span class="token property">description</span>  <span class="token operator">=</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">text</span><span class="token punctuation">;</span>\n        <span class="token variable">$seed</span><span class="token operator">-&gt;</span><span class="token property">adresse</span>      <span class="token operator">=</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">address</span><span class="token punctuation">;</span>\n        <span class="token variable">$seed</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',7),p={render:function(n,s){return e}}}}]);