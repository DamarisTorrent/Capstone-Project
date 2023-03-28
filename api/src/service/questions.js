const knex = require('../knex')

exports.showRandomQuestion = async (difficulty, category) => {
  
const result = await knex('question')
  .where((builder) => {
    if (difficulty)
      builder.where('difficulty', difficulty)

    if (category)
      builder.where('category', category)
  })
  .orderByRaw('RAND()')
  .limit(1)
  .first()

return result
}