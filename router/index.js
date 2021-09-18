const express = require('express')
const user = require('./user')
const profile = require('./profile')
const article = require('./article')
const tag = require('./tag')

const router = express.Router()

// 用户相关路由
router.use(user)
router.use('/profiles', profile)
// 文章相关路由
router.use('/articles', article)
// 标签相关路由
router.use('/tags', tag)

module.exports = router