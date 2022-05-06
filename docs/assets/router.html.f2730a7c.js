import{_ as p,r as e,o,c as l,a as n,b as t,F as c,d as s,e as i}from"./app.50988c2e.js";const r={},u=n("h1",{id:"\u8DEF\u7531",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8DEF\u7531","aria-hidden":"true"},"#"),s(" \u8DEF\u7531")],-1),k=n("p",null,[s("\u8DEF\u7531\u5B9E\u73B0\u4E86\u81EA\u52A8\u6CE8\u518C\uFF0C\u8DEF\u7531\u914D\u7F6E\u5B58\u653E\u5728 "),n("code",null,"/src/router/modules/"),s(" \u76EE\u5F55\u4E0B\uFF0C\u6BCF\u4E00\u4E2A js \u6587\u4EF6\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\uFF0C\u53EF\u53C2\u8003 "),n("code",null,"/src/router/modules/example.js"),s(" \u6587\u4EF6\u3002")],-1),g=s("\u66F4\u591A\u4F7F\u7528\u6280\u5DE7\u8BF7\u79FB\u6B65\u81F3 Vue-router "),d={href:"https://next.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},h=s("\u5B98\u65B9\u6587\u6863"),v=s("\u3002"),m=n("h2",{id:"\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531","aria-hidden":"true"},"#"),s(" \u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531")],-1),y=s("\u8BE5\u7279\u6027\u7531 "),x={href:"https://github.com/hannoeru/vite-plugin-pages",target:"_blank",rel:"noopener noreferrer"},b=s("vite-plugin-pages"),_=s(" \u548C "),f={href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts",target:"_blank",rel:"noopener noreferrer"},j=s("vite-plugin-vue-layouts"),w=s(" \u63D0\u4F9B\u652F\u6301\u3002"),C=i(`<p>\u4F20\u7EDF\u4F7F\u7528\u8DEF\u7531\u7684\u65B9\u5F0F\u9700\u8981\u624B\u52A8\u7F16\u5199\u8DEF\u7531\uFF0C\u800C\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\u5219\u4F1A\u6839\u636E\u6587\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u81EA\u52A8\u751F\u6210\u8DEF\u7531\u7ED3\u6784\uFF0C\u4ECE\u800C\u8282\u7701\u5F00\u53D1\u5468\u671F\u3002</p><p>\u672C\u6A21\u7248\u9ED8\u8BA4\u672A\u5F00\u542F\u8BE5\u6A21\u5F0F\uFF0C\u5982\u679C\u9700\u8981\u542F\u7528\uFF0C\u5230 <code>/src/router/index.js</code> \u6587\u4EF6\u91CC\u627E\u5230\u4E0B\u9762\u4EE3\u7801\u7247\u6BB5\uFF0C\u901A\u8FC7\u5F00\u542F/\u5173\u95ED\u6CE8\u91CA\u4FEE\u6539\u6210\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// \u6CE8\u91CA\u4EE5\u4E0B\u4EE3\u7801</span>
<span class="token comment">// const routesContext = i<wbr>mport.meta.globEager(&#39;./modules/*.js&#39;)</span>
<span class="token comment">// Object.keys(routesContext).forEach(v =&gt; {</span>
<span class="token comment">//     routes.push(routesContext[v].default)</span>
<span class="token comment">// })</span>
<span class="token comment">// routes.push({</span>
<span class="token comment">//     path: &#39;/:pathMatch(.*)*&#39;,</span>
<span class="token comment">//     component: () =&gt; import(&#39;@/views/[...all].vue&#39;),</span>
<span class="token comment">//     meta: {</span>
<span class="token comment">//         title: &#39;\u627E\u4E0D\u5230\u9875\u9762&#39;</span>
<span class="token comment">//     }</span>
<span class="token comment">// })</span>
<span class="token comment">// routes = routes.flat()</span>

<span class="token comment">// \u5F00\u542F\u4EE5\u4E0B\u4EE3\u7801</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupLayouts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-layouts&#39;</span>
<span class="token keyword">import</span> generatedRoutes <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-pages&#39;</span>
generatedRoutes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token operator">?.</span>meta<span class="token operator">?.</span>layout <span class="token operator">!=</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token function">setupLayouts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div></div><p>\u542F\u7528\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\u540E\uFF0C<code>/src/router/modules/</code> \u76EE\u5F55\u5C06\u4E0D\u518D\u88AB\u9700\u8981\uFF0C\u800C <code>/src/views/</code> \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u6CE8\u518C\u6210\u8DEF\u7531\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\u6587\u4EF6\u7CFB\u7EDF                           \u8DEF\u7531\u5730\u5740                          \u8DEF\u7531 name

views
\u251C\u2500 example
\u2502    \u251C\u2500 components
\u2502    \u2502    \u2514\u2500 List
\u2502    \u2502         \u2514\u2500 index.vue
\u2502    \u251C\u2500 params
\u2502    \u2502    \u2514\u2500 [id].vue              /example/params/:id              example-params
\u2502    \u251C\u2500 axios.vue                  /example/axios                   example-axios
\u2502    \u251C\u2500 cookie.vue                 /example/cookie                  example-cookie
\u2502    \u2514\u2500 svgicon.vue                /example/svgicon                 example-svgicon
\u251C\u2500 [...all].vue                    /:all(.*)*                       all
\u251C\u2500 index.vue                       /                                index
\u2514\u2500 login.vue                       /login                           login
</code></pre></div><p>\u901A\u8FC7\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u53EF\u4EE5\u770B\u51FA\u51E0\u4E2A\u7279\u6027\uFF1A</p><ul><li>\u4F7F\u7528\u8DEF\u7531\u53C2\u6570\u9700\u901A\u8FC7 <code>[ ]</code> \u5C06\u53C2\u6570\u540D\u5305\u88F9\uFF0C\u5E76\u8BBE\u4E3A\u6587\u4EF6\u540D</li><li>\u6587\u4EF6\u5939\u4E0D\u4F1A\u751F\u6210\u8DEF\u7531\uFF0C\u4F8B\u5982 example \u6587\u4EF6\u5939\u5E76\u6CA1\u6709\u751F\u6210 <code>/example</code> \u8DEF\u7531</li><li>\u8DEF\u7531 name \u4F1A\u6839\u636E\u6587\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u81EA\u52A8\u751F\u6210\uFF0C\u5E76\u7528 <code>-</code> \u8FDE\u63A5\uFF0C\u53EF\u786E\u4FDD name \u7684\u552F\u4E00\u6027</li><li>\u6240\u6709 components \u76EE\u5F55\u5747\u4E0D\u4F1A\u751F\u6210\u8DEF\u7531</li></ul><hr><p>\u9ED8\u8BA4\u751F\u6210\u7684\u6240\u6709\u8DEF\u7531\u5747\u4E3A\u5D4C\u5957\u8DEF\u7531\uFF0C\u7236\u7EA7 component \u6307\u5411 <code>/src/layout/index.vue</code> \u7EC4\u4EF6\uFF0C\u5373\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u7684\u8DEF\u7531</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u5728 SFC \u5355\u6587\u4EF6\u7EC4\u4EF6\u91CC\u8BBE\u7F6E layout \uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>
{
    meta: {
        layout: &#39;example&#39;
    }
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>login \u9875\u9762<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u7684\u8DEF\u7531</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/example.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;example&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div><p>\u540C\u6837\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6210 <code>layout: false</code> \uFF0C\u8FD9\u6837\u8BE5\u8DEF\u7531\u5C31\u4E0D\u4F1A\u751F\u6210\u5D4C\u5957\u8DEF\u7531\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>
{
    meta: {
        layout: false
    }
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>login \u9875\u9762<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u7684\u8DEF\u7531</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><hr><p>SFC \u5355\u6587\u4EF6\u7EC4\u4EF6\u91CC\u7684 <code>&lt;route&gt;&lt;/route&gt;</code> \u63A5\u6536\u6807\u51C6\u8DEF\u7531\u914D\u7F6E\u6570\u636E\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5728\u91CC\u9762\u914D\u7F6E\u7B26\u5408\u8DEF\u7531\u89C4\u5219\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- /src/views/example/params.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>
{
    path: &#39;/example/params/:id&#39;,
    name: &#39;exampleParams&#39;,
    meta: {
        layout: &#39;example&#39;,
        title: &#39;\u8FD9\u662F params \u9875\u9762&#39;,
        requireLogin: true
    }
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u7684\u8DEF\u7531</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/example/params/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/example.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/example/params.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;exampleParams&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F params \u9875\u9762&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">requireLogin</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0D\u8FC7\u65E2\u7136\u4F7F\u7528\u4E86\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\uFF0C\u4E0D\u5EFA\u8BAE\u518D\u624B\u52A8\u53BB\u8BBE\u7F6E <code>path</code> \u548C <code>name</code> \uFF0C\u66F4\u591A\u7684\u4F7F\u7528\u573A\u666F\u5E94\u8BE5\u662F\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u53BB\u6269\u5C55 <code>meta</code> \u5BF9\u8C61\u91CC\u7684\u5C5E\u6027\u3002</p>`,21);function L(E,V){const a=e("ExternalLinkIcon");return o(),l(c,null,[u,k,n("p",null,[g,n("a",d,[h,t(a)]),v]),m,n("blockquote",null,[n("p",null,[y,n("a",x,[b,t(a)]),_,n("a",f,[j,t(a)]),w])]),C],64)}var N=p(r,[["render",L],["__file","router.html.vue"]]);export{N as default};
