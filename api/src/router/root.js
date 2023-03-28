const root = (app) => {
  app.get('/', (req, res) => {
    res.json({message: 'Hello With Rubber'})
  })
}

module.exports = root