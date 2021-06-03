import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from 'vite-plugin-html'
import svgIcon from 'vite-plugin-svg-icons'
import spritesmith from 'vite-plugin-spritesmith'
import compression from 'vite-plugin-compression'
import { viteMockServe as mock } from 'vite-plugin-mock'
const fs = require('fs')
const path = require('path')

const spritesmithTasks = []
fs.readdirSync('src/assets/sprites').map(dirname => {
    if (fs.statSync(`src/assets/sprites/${dirname}`).isDirectory()) {
        spritesmithTasks.push(
            spritesmith({
                watch: true,
                src: {
                    cwd: `./src/assets/sprites/${dirname}`,
                    glob: '*.png'
                },
                target: {
                    image: `./src/assets/sprites/${dirname}.png`,
                    css: [
                        [
                            `./src/assets/sprites/_${dirname}.scss`,
                            {
                                format: 'handlebars_based_template'
                            }
                        ]
                    ]
                },
                apiOptions: {
                    cssImageRef: `@/assets/sprites/${dirname}.png`,
                    spritesheet_info: {
                        name: dirname,
                        format: 'handlebars_based_template'
                    }
                },
                customTemplates: {
                    handlebars_based_template: './scss.template.hbs'
                },
                spritesmithOptions: {
                    algorithm: 'binary-tree',
                    padding: 10
                }
            })
        )
    }
})

// https://vitejs.dev/config/
export default ({ mode, command }) => {
    return defineConfig({
        // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
        server: {
            open: true,
            proxy: {
                '/proxy': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_API_ROOT,
                    changeOrigin: command === 'serve',
                    rewrite: path => path.replace(/\/proxy/, '')
                }
            }
        },
        // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
        build: {
            outDir: mode == 'production' ? 'dist' : `dist-${mode}`,
            sourcemap: mode != 'production',
            terserOptions: {
                compress: {
                    drop_console: loadEnv(mode, process.cwd()).VITE_BUILD_DROP_CONSOLE
                }
            }
        },
        plugins: [
            vue(),
            html({
                inject: {
                    injectData: {
                        title: loadEnv(mode, process.cwd()).VITE_APP_TITLE,
                        debugTool: loadEnv(mode, process.cwd()).VITE_APP_DEBUG_TOOL
                    }
                },
                minify: true
            }),
            svgIcon({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
                symbolId: 'icon-[dir]-[name]'
            }),
            compression(),
            mock({
                mockPath: 'src/mock',
                supportTs: false,
                injectCode: `
                    import { setupProdMockServer } from './mockProdServer';
                    setupProdMockServer();
                `
            }),
            ...spritesmithTasks
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "src/assets/styles/resources/variables.scss";
                        @import "src/assets/styles/resources/utils.scss";
                        @import "src/assets/sprites/_example.scss";
                    `
                }
            }
        }
    })
}
