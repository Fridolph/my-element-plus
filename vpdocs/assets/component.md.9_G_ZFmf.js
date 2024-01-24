import{_ as s,c as a,o as i,V as n}from"./chunks/framework.s2LJAcwQ.js";const g=JSON.parse('{"title":"关于文档","description":"","frontmatter":{},"headers":[],"relativePath":"component.md","filePath":"component.md"}'),l={name:"component.md"},e=n(`<h1 id="关于文档" tabindex="-1">关于文档 <a class="header-anchor" href="#关于文档" aria-label="Permalink to &quot;关于文档&quot;">​</a></h1><p>这是一个很好的学习及应用思路。在我们实际开发中，花费一小点的时间成本，构建出这样一个尽可能详细的文档非常有必要。可与产品、UI 和测试同事更好地合作与沟通，避免一些潜在的麻烦。</p><p>我认为反馈是非常有重要且有必要的。之前的工作中，UI 同事经常会在开发周期提一些临时修改意见，有了这样一个文档和示例 Demo，同事们能更好地了解项目开发进度和一些实现细节。</p><p>前端开发 <code>styles/vars</code> 相关颜色变量甚至可让 UI 同事来维护</p><h2 id="关于组件" tabindex="-1">关于组件 <a class="header-anchor" href="#关于组件" aria-label="Permalink to &quot;关于组件&quot;">​</a></h2><p>组件开发的方法论</p><ul><li>根据需求初步确定 <code>属性</code>、<code>事件</code>、<code>slots</code>、<code>expose</code> （不需要特别精确，后续随着功能开发可持续更新）</li><li>组件的静态版本（不添加交互，只有html结构、classes、slots）</li><li>将需求中有行为的功能做成开发计划列表</li><li>根据列表一项项地推进，完成对应功能</li><li>逐步完成 样式 / 测试 等收尾工作</li><li>更新文档 及 发布</li></ul><h2 id="官方文档推荐的示例" tabindex="-1">官方文档推荐的示例 <a class="header-anchor" href="#官方文档推荐的示例" aria-label="Permalink to &quot;官方文档推荐的示例&quot;">​</a></h2><p>暂时保留了. 本页面演示了 VitePress 提供的一些内置 Markdown 扩展。</p><h3 id="语法高亮" tabindex="-1">语法高亮 <a class="header-anchor" href="#语法高亮" aria-label="Permalink to &quot;语法高亮&quot;">​</a></h3><p>VitePress 提供由 <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a> 提供支持的语法突出显示，以及行突出显示等附加功能：</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\`\`\`js{4}</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h3 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h3><p>查看文档以获取 Markdown 扩展的 <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,26),p=[e];function t(h,o,r,c,d,k){return i(),a("div",null,p)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
