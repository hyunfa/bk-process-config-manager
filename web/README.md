gsekit-web
===

## 使用

``` bash
# 本地运行蓝鲸前端开发脚手架的文档工程
npm run doc

# 构建蓝鲸前端开发脚手架的文档工程
npm run build:doc

# 本地开发
npm run dev

# 创建 `Dll bundle`
npm run dll

# 打包构建
npm run build

# 打包构建分析
npm run build:analyzer
```
// npm run doc 执行后无效，这里注释了

# 补充说明，环境搭建
1.dev.env.js中修改proxyTableTarget，devHost，hosts配置 127.0.0.1 dev.xxxxxx-xxx.xx.com
2.index-dev.html中
    const LOGIN_URL = 'login.x.xxx.com/'; // 登录地址
    const CSRF_COOKIE_NAME = 'xx_csrftoken'; //具体看cookie中的csrftoken的key
    let SITE_URL = ''; // 一般是这个，具体根据情况来
    const AJAX_URL_PREFIX = '/'
    

```
