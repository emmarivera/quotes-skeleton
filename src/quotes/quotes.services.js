const quoteControllers = require('./quotes.controllers')

const postQuote = (req, res) => {
    const {quote, year} = req.body
    const userId = req.user.id
    quoteControllers.createQuote({quote, userId, year})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message:err.message})
        })
}

module.exports = postQuote