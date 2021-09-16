const moment = require('moment-timezone')

module.exports = {
    createdAt: {
        type: String,
        default: moment().tz("Asia/Shanghai").format('YYYY-MM-DD hh:mm:ss')
    },
    updatedAt: {
        type: String,
        default: moment().tz("Asia/Shanghai").format('YYYY-MM-DD hh:mm:ss')
    }
}