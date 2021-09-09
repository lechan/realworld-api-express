const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/articles', async(req, res, next) => {
    try {
        res.send('get /articles')
    } catch (err) {
        next(err)
    }
})

// 创建文章
router.post('/article', async(req, res, next) => {
    try {
        res.send('post /article')
    } catch (err) {
        next(err)
    }
})

module.exports = router