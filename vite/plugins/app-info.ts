import boxen from 'boxen'
import picocolors from 'picocolors'
import type { Plugin } from 'vite'

export default function appInfo(): Plugin {
  return {
    name: 'appInfo',
    apply: 'serve',
    async buildStart() {
      const { bold, green, bgGreen, underline } = picocolors
      // eslint-disable-next-line no-console
      console.log(
        boxen(
          `${bold(green(`由 ${bgGreen('Fantastic-startkit')} 驱动`))}\n\n${underline('https://hooray.github.io/fantastic-startkit')}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            textAlignment: 'center',
          },
        ),
      )
    },
  }
}
