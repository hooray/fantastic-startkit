import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from 'vite-plugin-html'
import svgIcon from 'vite-plugin-svg-icons'
import spritesmith from 'vite-plugin-spritesmith'
import compression from 'vite-plugin-compression'
import { viteMockServe as mock } from 'vite-plugin-mock'
const fs = require('fs')
const path = require('path')

// https://vitejs.dev/config/
export default ({ mode, command }) => {
    // 全局 scss 资源
    const scssResources = []
    fs.readdirSync('src/assets/styles/resources').map(dirname => {
        if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
            scssResources.push(`@import "src/assets/styles/resources/${dirname}";`)
        }
    })
    // css 精灵图相关
    const spriteDirnames = []
    fs.readdirSync('src/assets/sprites').map(dirname => {
        if (fs.statSync(`src/assets/sprites/${dirname}`).isDirectory()) {
            spriteDirnames.push(dirname)
            // css 精灵图生成的 scss 文件也需要放入全局 scss 资源
            scssResources.push(`@import "src/assets/sprites/_${dirname}.scss";`)
        }
    })
    const spritesmithTasks = []
    spriteDirnames.map(item => {
        spritesmithTasks.push(
            spritesmith({
                watch: command === 'serve',
                src: {
                    cwd: `./src/assets/sprites/${item}`,
                    glob: '*.png'
                },
                target: {
                    image: `./src/assets/sprites/${item}.png`,
                    css: [
                        [
                            `./src/assets/sprites/_${item}.scss`,
                            {
                                format: 'handlebars_based_template'
                            }
                        ]
                    ]
                },
                apiOptions: {
                    cssImageRef: `@/assets/sprites/${item}.png`,
                    spritesheet_info: {
                        name: item,
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
    })
    const compressionTasks = []
    if (loadEnv(mode, process.cwd()).VITE_BUILD_COMPRESS != undefined) {
        loadEnv(mode, process.cwd()).VITE_BUILD_COMPRESS.split(',').map(v => {
            if (v == 'gzip') {
                compressionTasks.push(compression())
            }
            if (v == 'brotli') {
                compressionTasks.push(
                    compression({
                        algorithm: 'brotliCompress'
                    })
                )
            }
        })
    }
    return defineConfig({
        // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
        server: {
            open: true,
            proxy: {
                '/proxy': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_API_BASEURL,
                    changeOrigin: command === 'serve' && loadEnv(mode, process.cwd()).VITE_OPEN_PROXY == 'true',
                    rewrite: path => path.replace(/\/proxy/, '')
                }
            }
        },
        // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
        build: {
            outDir: mode == 'production' ? 'dist' : `dist-${mode}`,
            sourcemap: loadEnv(mode, process.cwd()).VITE_BUILD_SOURCEMAP == 'true',
            terserOptions: {
                compress: {
                    drop_console: loadEnv(mode, process.cwd()).VITE_BUILD_DROP_CONSOLE == 'true'
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
            ...compressionTasks,
            mock({
                mockPath: 'src/mock',
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
                    additionalData: scssResources.join('')
                }
            }
        }
    })
}
