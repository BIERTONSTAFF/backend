const mongoose = require("mongoose")
const crypto = require("crypto")

const schema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //slush note: sad
    ip: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: crypto.randomBytes(16).toString("hex")
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    discord: {
        type: Object,
        default: {}
    }
})

module.exports = mongoose.model("users", schema)