import{_ as s,c as a,o as i,a6 as n}from"./chunks/framework.D5g3KRpY.js";const g=JSON.parse('{"title":"环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure.md","filePath":"guide/configure.md"}'),e={name:"guide/configure.md"},l=n(`<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><p>默认提供三套环境配置，分别为：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LCGBB" id="tab-5sQUFIq" checked><label for="tab-5sQUFIq">.env.development 开发环境</label><input type="radio" name="group-LCGBB" id="tab-HOLHb5x"><label for="tab-HOLHb5x">.env.test 测试环境</label><input type="radio" name="group-LCGBB" id="tab-Lpj-mJg"><label for="tab-Lpj-mJg">.env.production 生产环境</label></div><div class="blocks"><div class="language-yaml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = 页面标题(development)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启代理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_OPEN_PROXY = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启开发者工具</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_OPEN_DEVTOOLS = false</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = 页面标题(test)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时生成 sourcemap</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_COMPRESS =</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_ARCHIVE =</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = 页面标题</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时生成 sourcemap</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_ARCHIVE =</span></span></code></pre></div></div></div><p>其中 <code>VITE_APP_SETTING</code> <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p>`,5),p=[l];function t(h,k,d,c,r,o){return i(),a("div",null,p)}const A=s(e,[["render",t]]);export{g as __pageData,A as default};
