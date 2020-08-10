module.exports = {
  publicPath: './',//部署应用包时的基本 URL
  outputDir: 'dist',//当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  lintOnSave: true,//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  assetsDir: 'assets',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  runtimeCompiler: true,//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  indexPath: 'index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/style.sass"`
      },
      scss: {
        prependData: `@import "~@/assets/scss/style.scss";`
      },
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {    // 设置代理  
      '/api': {
        target: 'http://www.test.com',
        ws: true, // 是否启用websockets
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changeOrigin: true, //开启代理
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}