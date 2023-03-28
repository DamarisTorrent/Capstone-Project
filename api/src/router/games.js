const { getGamesByUsername, addGame } = require('../controller/games')
const { authenticate } = require('../middleware/authenticate')

const games = (app) => {

  app.get('/game/:username', getGamesByUsername)
  app.post('/game/results', authenticate, addGame)

}

module.exports = games