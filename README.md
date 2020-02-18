# k100-web-native

## 安装依赖
```
yarn install or npm install
```

### 启动开发环境
```
yarn dev or npm run dev
```

### 打包
```
yarn build or npm run build
```
- 打包后的文件在文件夹bundle下 zip.zip
- 将zip.zip文件上传到IDE二开控件页签下即可


## 开发说明

### 文件夹
|- build 二开控件打包配置 (勿动)
|- bundle 打包后的文件夹
|- public 开发环境运行文件(勿动)
|- server 开发环境服务器 (勿动)
|- tests 测试代码
|- src 代码内容
  |- component 二开控件开发文件夹 * 注意二开控件代码需要全部在此文件夹中，方便后续打包 *
    |- package.json 二开控件名称以及版本信息
    |- index.js 二开控件导出路径
  |- config 二开控件配置信息
    |- index.js  可以配置关联web引擎站点信息等
    |- page.js 页面测试协议
  |- 其他，勿动


