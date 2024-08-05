import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig<Theme>({
  shortcuts: [
    [/^flex-?(col)?-(start|end|center|baseline|stretch)-?(start|end|center|between|around|evenly|left|right)?$/, ([, col, items, justify]) => {
      const cls = ['flex']
      if (col === 'col') {
        cls.push('flex-col')
      }
      if (items === 'center' && !justify) {
        cls.push('items-center')
        cls.push('justify-center')
      }
      else {
        cls.push(`items-${items}`)
        if (justify) {
          cls.push(`justify-${justify}`)
        }
      }
      return cls.join(' ')
    }],
    [/^square-\[?(.*?)\]?$/, ([, size]) => `w-${size} h-${size}`],
    [/^circle-\[?(.*?)\]?$/, ([, size]) => `square-${size} rounded-full`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
})
