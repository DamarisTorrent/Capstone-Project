// import routes
const root = require('./root')
const products = require('./products')
const product = require('./product')
const review = require('./review')



const router = (app) => {

  root(app)
  products(app)
  product(app)
  review(app)
  
  

}

module.exports = router