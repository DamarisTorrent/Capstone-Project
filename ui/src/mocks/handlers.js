import { rest } from 'msw'
import  getProducts  from './data/getProducts.json'


// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  // rest.get(`${baseUrl}/products/`, (req, res, ctx) => { // capture "GET /greeting" requests
   
  //   return res(ctx.json(getProducts)) // respond using a mocked JSON body
  // })
  
]