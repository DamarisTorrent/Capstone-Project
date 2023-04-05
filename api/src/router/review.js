const { addReview, updateReview } = require('../controller/review')

const review = (app) => {

  app.post('/review', addReview)
  app.put('/review/id/:id', updateReview)

}

module.exports = review