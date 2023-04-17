const { getAdminDetail } = require('../controller/admin')


const admin = (app) => {

  app.get('/admin', getAdminDetail)

}

module.exports = admin