const knex = require('../knex')

exports.showGamesByUsername = async (username) => {
  
  const userId = (await knex
  .distinct()
  .from('user')
  .pluck('user_id')
  .where ('username', username))[0]

  const games = await knex('game').where('user_id', userId)
  
  return games
}

exports.createGame = async (game) => {

  const responses = game.responses
  delete game.responses

  const gameId = await knex('game').insert(game)
  
  const results = await Promise.all(responses.map(async (response) => {
    response.game_id = gameId
    return await knex('response').insert(response)
  }))

  return gameId
}