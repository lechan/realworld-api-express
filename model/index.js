const mongoose = require('mongoose')
const User = require('./user')
const Article = require('./article')
const { dbUri } = require('../config/config.default')
mongoose.connect(dbUri)

const db = mongoose.connection

db.on('error', err => {
    console.log('数据库连接失败', err)
})

db.once('open', function() {
    console.log('数据库连接成功')
})

// 导出模型
module.exports = {
    User: mongoose.model('User', User),
    Article: mongoose.model('Article', Article)
}
