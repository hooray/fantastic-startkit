import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    '**/*.md',
    '.vitepress/cache',
    '.vitepress/dist',
  ],
})
