# 基于 realworld api 的 express 接口方案

> 学习 express， 完成用户注册、登录，用户、文章增删改查，数据库使用 MongoDB

## 运行
- npm install
- npm start

## 目录结构
- config 公共配置（MongoDB地址，jwt的密钥）
- controller 控制器（具体业务逻辑，与MongoDB的交互）
- middleware 中间件（权限jwt，错误处理，并发验证）
- model 模型（MongoDB的模型结构）
- router 路由
- util 工具方法
- validator 公共验证方法

## 状态码
- 200 GET 请求成功
- 201 POST PUT PATCH 请求成功（创建、更新）
- 204 DELETE 请求成功（删除）
- 400 资源未找到
- 401 权限错误
- 500 服务端错误

## 相关参考
- [realworld api](https://github.com/gothinkster/realworld/tree/main/api)
- [mongoose](https://mongoosejs.com/docs/)
- [Online UUID Generator](https://www.uuidgenerator.net/)