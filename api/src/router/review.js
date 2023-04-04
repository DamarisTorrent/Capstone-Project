const { addReview } = require('../controller/review')

const review = (app) => {

  app.post('/review', addReview)

}

module.exports = review