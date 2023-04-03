// import routes
const root = require('./root')
const products = require('./products')
const product = require('./product')



const router = (app) => {

  root(app)
  products(app)
  product(app)
  
  

}

module.exports = router