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
> build 二开控件打包配置 (勿动)
> bundle 打包后的文件夹
> public 开发环境运行文件(勿动)
> server 开发环境服务器 (勿动)
> tests 测试代码
> src 代码内容
  >> component 二开控件开发文件夹 **注意二开控件代码需要全部在此文件夹中，方便后续打包**
    - package.json 二开控件名称以及版本信息
    - index.js 二开控件导出路径
  >> config 二开控件配置信息
    - index.js  可以配置关联web引擎站点信息等
    - page.js 页面测试协议
  >> 其他，勿动

  ### 开发流程

1. src/component/package.json 定义版本信息
```
{
  "name": "periodicpicker", // 定义二开控件类型
  "version": "0.1", // 控件版本
  "main": "./index.js" // 控件路径 脚手架需要读取到具体指向的控件文件 默认./index.js
}
```

2. src/config/page.js 提供表单测试协议
```
/* eslint-disable */
export defualt {
  "pageinfo": {},
  "view": {},
  "presenter: {
    "initial": [],
    "interface": [],
    "handlers": []
  }
}
```
3. src/config/index.js 提供对应连接web站点地址

4. src/component/ 在此文件夹内部写开发代码

### 可用sdk

##### xtion-web
```
import XtWeb from 'xtion-web'
```

> XtWeb
  >> Engine
    >>> UIService
    >>> UIEngine
    >>> Engine 引起
    >>> UI
      - View 组件父类 所有二开组件均需要minxins此对象
  >> Widget
    >>> UIService
      - Loading 加载框
      - SimpleModalService 模态框服务
    >>> UI widget层控件
  >> Service
    >>> Storager 存储
      - Token token信息
      - User 用户信息
      - UniqueId 生成唯一id
      - CloudServ 云存储信息
    >>> Permission 权限服务
      - checkFunc 检查权限
    >>> DownloadService 文件服务
      - download 下载文件 返回blob
      - downloadFile 下载文件 直接弹出下载并保存
      - getUrl 获取文件的下载路径url

