# twitter 登录 demo

这是一个关于如何使用nodejs实现twitter登录的教程。

## 步骤 1: 下载代码

首先，您需要安装git，
下载代码

```
git clone https://github.com/tplcheap/twitter-login-demo.git
```

## 步骤 2: 安装依赖

```
npm install
```

## 步骤 3: 修改配置

根据 .env.example 模板创建 .env 文件，更改TWITTER_API_KEY，TWITTER_API_SECRET，TWITTER_CALLBACK。
TWITTER_API_KEY，TWITTER_API_SECRET前往https://developer.twitter.com 网站找到 Consumer Keys 获取信息。
TWITTER_CALLBACK为授权登录后的回调地址，可在developer twitter 配置页找到 User authentication settings修改。

## 步骤 4: 启动程序

node index.js

## 步骤 5: 使用postman获取其他接口调试工具测试

1、get调用http://localhost:3000/twitter/oauth,返回twitter url和requestTokenSecret点击进入第三方授权登录页面
2、授权登录后会跳转到回TWITTER_CALLBACK地址，url上返回oauth_token和oauth_verifier
3、拿第一步的requestTokenSecret和第二步的oauth_token和oauth_verifier，post调用http://localhost:3000/twitter/oauth/verifyCredentials 返回twitter信息，进行查询然后登录，或者绑定twitter功能。
