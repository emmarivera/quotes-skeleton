const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('quotes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: null
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    year: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false   
})

module.exports = Quotes