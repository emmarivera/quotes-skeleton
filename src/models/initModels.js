const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Quotes = require('./quotes.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? FK = quotes
    Quotes.belongsTo(Users)
    Users.hasMany(Quotes)
}

module.exports = initModels