"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7710],{8708:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-346fe512",path:"/dev/ionic/IonicLearn.html",title:"Ionic 4",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:3,title:"Get Started",slug:"get-started",children:[]},{level:3,title:"Change text with a button",slug:"change-text-with-a-button",children:[]},{level:3,title:"transform Simple html file to ionic app",slug:"transform-simple-html-file-to-ionic-app",children:[]},{level:3,title:"Publish Ionic app with capacitor",slug:"publish-ionic-app-with-capacitor",children:[]},{level:3,title:"After cloning a repo",slug:"after-cloning-a-repo",children:[]},{level:3,title:"css",slug:"css",children:[]},{level:3,title:"Http requests",slug:"http-requests",children:[]},{level:3,title:"Create and use a class",slug:"create-and-use-a-class",children:[]},{level:3,title:"modals",slug:"modals",children:[]},{level:3,title:"ionic storage",slug:"ionic-storage",children:[]},{level:3,title:"ionic deploy",slug:"ionic-deploy",children:[]},{level:3,title:"Search filter",slug:"search-filter",children:[]}],filePathRelative:"dev/ionic/IonicLearn.md",git:{updatedTime:1627849147e3,contributors:[{name:"kratos",email:"desmond8500@gmail.com",commits:1}]}}},9516:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="ionic-4" tabindex="-1"><a class="header-anchor" href="#ionic-4" aria-hidden="true">#</a> Ionic 4</h1><h3 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="change-text-with-a-button" tabindex="-1"><a class="header-anchor" href="#change-text-with-a-button" aria-hidden="true">#</a> Change text with a button</h3><p>In the html file :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-content</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ion-button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>onChangeText()<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>ChangeText<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ion-content</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>In the typescript file</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>text <span class="token operator">=</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>\n<span class="token function">onChangeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span><span class="token string">&quot;hello world !!&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="transform-simple-html-file-to-ionic-app" tabindex="-1"><a class="header-anchor" href="#transform-simple-html-file-to-ionic-app" aria-hidden="true">#</a> transform Simple html file to ionic app</h3><p>use</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@ionic/core@latest/dist/ionic.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="publish-ionic-app-with-capacitor" tabindex="-1"><a class="header-anchor" href="#publish-ionic-app-with-capacitor" aria-hidden="true">#</a> Publish Ionic app with capacitor</h3><p>We have to build the app first</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ng build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>then we create the android project</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic capacitor add android\nionic capacitor copy android\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>to lauch the app do</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic capacitor run android\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="after-cloning-a-repo" tabindex="-1"><a class="header-anchor" href="#after-cloning-a-repo" aria-hidden="true">#</a> After cloning a repo</h3><p>do</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In oder to install dépendencies</p><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3><h4 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> Define</h4><p>To set global variables css go to <strong>src/theme/variables.scss</strong> and set the background</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--ion-background-color: #ff3700;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="http-requests" tabindex="-1"><a class="header-anchor" href="#http-requests" aria-hidden="true">#</a> Http requests</h3><ol><li>Create a service</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic g service data\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Import the service into the <strong>ts file</strong> of the page, in this case the file is in a subfolder <strong>service</strong></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { UsersService } from &#39;../../service/data.service&#39;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>in the data service file</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { HttpClient } from &#39;@angular/common/http&#39;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="create-and-use-a-class" tabindex="-1"><a class="header-anchor" href="#create-and-use-a-class" aria-hidden="true">#</a> Create and use a class</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic g class class/test\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>it&#39;s contents</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export class Ticket {\n  constructor(\n    public id: string = &quot;A0000&quot;,\n    public name: string = &quot;hello&quot; ,\n    public date: string = &quot;27/05/2019&quot; ,\n    public etat: string = &quot;actif&quot; ,\n    public caisse: string = &quot;03&quot; ,\n  ){}\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="modals" tabindex="-1"><a class="header-anchor" href="#modals" aria-hidden="true">#</a> modals</h3><p>Create the modal</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ionic g page mymodal\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>add it into the app.modules</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { MymodalPageModule } from &#39;./pages/mymodal/mymodal.module&#39;;\n\n\nimports: [\n    TicketPageModule\n  ],\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>and into the calling page</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { MymodalPage} from &#39;../mymodal/mymodal.page&#39;;\n\nconstructor(public modalController: ModalController) {}\n\n  async appelerModal()  {\n      const modal = await this.modalController.create({\n       component: MymodalPage\n     });\n     return await modal.present();\n    }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="ionic-storage" tabindex="-1"><a class="header-anchor" href="#ionic-storage" aria-hidden="true">#</a> ionic storage</h3><h3 id="ionic-deploy" tabindex="-1"><a class="header-anchor" href="#ionic-deploy" aria-hidden="true">#</a> ionic deploy</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cordova platform add android --save\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="search-filter" tabindex="-1"><a class="header-anchor" href="#search-filter" aria-hidden="true">#</a> Search filter</h3><p>create a service</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { Injectable } from &quot;@angular/core&quot;;\n\n@Injectable({\n  providedIn: &quot;root&quot;\n})\nexport class DataService {\n  public items: any = [];\n\n  constructor() {\n    this.items = [\n      { title: &quot;one&quot; },\n      { title: &quot;two&quot; },\n      { title: &quot;three&quot; },\n      { title: &quot;four&quot; },\n      { title: &quot;five&quot; },\n      { title: &quot;six&quot; }\n    ];\n  }\n\n  filterItems(searchTerm) {\n    return this.items.filter(item =&gt; {\n      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) &gt; -1;\n    });\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>into the ts file</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { Component, OnInit } from &quot;@angular/core&quot;;\nimport { DataService } from &quot;../services/data.service&quot;;\n\n@Component({\n  selector: &quot;app-home&quot;,\n  templateUrl: &quot;home.page.html&quot;,\n  styleUrls: [&quot;home.page.scss&quot;]\n})\nexport class HomePage implements OnInit {\n  public searchTerm: string = &quot;&quot;;\n  public items: any;\n\n  constructor(private dataService: DataService) {}\n\n  ngOnInit() {\n    this.setFilteredItems();\n  }\n\n  setFilteredItems() {\n    this.items = this.dataService.filterItems(this.searchTerm);\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>and finnaly into the html file</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',54),t={render:function(n,s){return e}}}}]);