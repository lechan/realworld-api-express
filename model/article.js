const mongoose = require('mongoose')
const baseModel = require('./base')

const articleSchema = new mongoose.Schema({
    ...baseModel
})

module.exports = articleSchema