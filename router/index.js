const express = require('express')
const user = require('./user')
const profile = require('./profile')
const article = require('./article')
const tag = require('./tag')

const router = express.Router()

// 用户相关路由
router.use(user)
router.use(profile)
// 文章相关路由
router.use(article)
// 标签相关路由
router.use(tag)

module.exports = router