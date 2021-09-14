const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登录
exports.login = async(req, res, next) => {
    try {
        const user = req.user.toJSON()
        // 生成token
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret)
        delete user.password
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

// 用户注册
exports.register = async(req, res, next) => {
    try {
        let user = new User(req.body.user)
        await user.save()
        user = user.toJSON()
        delete user.password
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// 获取当前登录用户
exports.getCurrentUser = async(req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}

// 更新当前登录用户
exports.updateCurrentUser = async(req, res, next) => {
    try {
        res.send('put /user')
    } catch (err) {
        next(err)
    }
}
