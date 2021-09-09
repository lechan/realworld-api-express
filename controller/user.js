// 用户登录
exports.login = async(req, res, next) => {
    try {
        res.send('post /users/login')
    } catch (err) {
        next(err)
    }
}

// 用户注册
exports.register = async(req, res, next) => {
    try {
        res.send('post /users')
    } catch (err) {
        next(err)
    }
}

exports.getCurrentUser = async(req, res, next) => {
    try {
        res.send('get /user')
    } catch (err) {
        next(err)
    }
}

exports.updateCurrentUser = async(req, res, next) => {
    try {
        res.send('put /user')
    } catch (err) {
        next(err)
    }
}
