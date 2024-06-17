/**
 * @file development env
 * @author blueking
 */

// 环境变量里的值需要 JSON.stringify 化，原因如下：
// 这里的变量是给 new webpack.DefinePlugin 插件使用的，这个插件有如下两个特点：
// 1、如果传入的变量是字符串，那么它将被用作代码片段。
// 2、如果传入的变量不是字符串，那么它将被字符串化(包括函数)。
// 例如：
// 在代码中使用如下代码
// if (a === VARI)
// 如果这里定义的是 VART: JSON.stringify('abcde') 那么这段代码会替换为 if (a === 'abcde')
// 如果这里定义的是 VART: 'abcde' 那么这段代码会替换为 if (a === abcde) 会报错

import merge from 'webpack-merge'
import prodEnv from './prod.env'

// 1. 线上代理地址 eg: https://xxxxxx-xxx.xx.com
export const proxyTableTarget = 'https://paas.ee225.bktencent.com'
// 2. 本地访问host地址 eg: https://dev.xxxxxx-xxx.xx.com
export const devHost = 'http://dev.paas.ee225.bktencent.com';

const NODE_ENV = JSON.stringify('development')

export default merge(prodEnv, {
    NODE_ENV: NODE_ENV,
    LOCAL_DEV_URL: JSON.stringify(`${devHost}`), // 配置 host 规避浏览器跨域警告，获取cookie
    LOCAL_DEV_PORT: JSON.stringify('8080'),
    AJAX_MOCK_PARAM: JSON.stringify('mock-file')
})
