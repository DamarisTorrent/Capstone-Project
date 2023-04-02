// import routes
const root = require('./root')
const products = require('./products')



const router = (app) => {

  root(app)
  products(app)
  
  

}

module.exports = router