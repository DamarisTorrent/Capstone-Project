const { getStatsByUsername } = require('../controller/stats')


const stats = (app) => {

  app.get('/stats/:username', getStatsByUsername)

}

module.exports = stats