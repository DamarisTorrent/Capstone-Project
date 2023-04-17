const knex = require('../knex')

exports.createScrapeImport = async (data) => {
  

  // await knex('product').del()
 
  const results = await knex('product').insert(data)
  return 
}