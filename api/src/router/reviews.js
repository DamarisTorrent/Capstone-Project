const { getReviews } = require('../controller/reviews')


const reviews = (app) => {

  app.get('/reviews/id/:id', getReviews)

}

module.exports = reviews