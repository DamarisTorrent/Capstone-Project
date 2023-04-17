// import routes
const root = require('./root')
const products = require('./products')
const product = require('./product')
const review = require('./review')
const reviews = require('./reviews')
const admin = require('./admin')

const router = (app) => {

  root(app)
  products(app)
  product(app)
  review(app)
  reviews(app)
  admin(app)
}

module.exports = router