const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    // 从请求头获取token
    let token = req.headers['authorization']
    token = token ? token.replace('Bearer ', '') : null
    if (!token) {
        return res.status(401).end()
    }
    try {
        // 验证token是否有效
        const decodedToken = await verify(token, jwtSecret)
        // 有效 把用户信息读取出来挂载到req上
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch (err) {
        return res.status(401).end()
    }
}