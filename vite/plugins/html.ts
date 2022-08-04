import { createHtmlPlugin } from 'vite-plugin-html'

const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
const copyright_main_style = `${copyright_common_style} background: #e24329;`
const copyright_sub_style = `${copyright_common_style} background: #707070;`

export default function createHtml(env, isBuild) {
  const { VITE_APP_TITLE, VITE_APP_DEBUG_TOOL } = env
  const copyrightScript = `
<script>
if ((navigator.language || navigator.browserLanguage).toLowerCase() === 'zh-cn') {
  console.info('%c由%cFantastic-startkit%c提供技术支持', '${copyright_sub_style}', '${copyright_main_style}', '${copyright_sub_style}', '\\nhttps://hooray.gitee.io/fantastic-startkit/');
} else {
  console.info('%cPowered by%cFantastic-startkit', '${copyright_sub_style}', '${copyright_main_style}', '\\nhttps://hooray.github.io/fantastic-startkit/');
}
</script>
  `
  let devtoolScript = ''
  switch (VITE_APP_DEBUG_TOOL) {
    case 'eruda':
      devtoolScript = `
<script src="//unpkg.com/eruda/eruda.js"></script>
<script>
  eruda.init()
</script>
      `
      break
    case 'vconsole':
      devtoolScript = `
<script src="//unpkg.com/vconsole/dist/vconsole.min.js"></script>
<script>
  new VConsole()
</script>
      `
      break
  }
  const html = createHtmlPlugin({
    inject: {
      data: {
        title: VITE_APP_TITLE,
        copyrightScript,
        devtoolScript,
      },
    },
    minify: isBuild,
  })
  return html
}
