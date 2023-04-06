const { addReview, updateReview, deleteReview } = require('../controller/review')

const review = (app) => {

  app.post('/review', addReview)
  app.put('/review/id/:id', updateReview)
  app.delete('/review/id/:id', deleteReview)

}

module.exports = review