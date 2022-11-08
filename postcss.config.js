module.exports = {
  plugins: {
    // 'postcss-px2vp': {
    //   // 需要转换的单位，默认为"px"
    //   unitToConvert: 'px',
    //   // 设计稿的视口宽度
    //   viewportWidth: 320,
    //   // 单位转换后保留的精度
    //   unitPrecision: 5,
    //   // 能转化为 vw 的属性列表
    //   propList: ['*'],
    //   // 希望使用的视口单位
    //   viewportUnit: 'vw',
    //   // 字体使用的视口单位
    //   fontViewportUnit: 'vw',
    //   // 需要忽略的 CSS 选择器，不会转为视口单位，使用原有的 px 等单位
    //   selectorBlackList: [],
    //   // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
    //   minPixelValue: 1,
    //   // 媒体查询里的单位是否需要转换单位
    //   mediaQuery: false,
    //   // 是否直接更换属性值，而不添加备用属性
    //   replace: true,
    //   // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //   exclude: [],
    // },
    autoprefixer: {},
  },
}
