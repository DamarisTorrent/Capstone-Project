import { rest } from 'msw'

// ** mock data JSON


// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  rest.get(`${baseUrl}/user/token`, (req, res, ctx) => { // capture "GET /greeting" requests
   
    return res(ctx.json({username: "dantewanders"})) // respond using a mocked JSON body
  }),
  rest.get(`${baseUrl}/leaderboard`, (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(leaderboard)) // respond using a mocked JSON body
  }),
 
]