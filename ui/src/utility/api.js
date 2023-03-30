//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'



export const getProducts = async () => {

  const response = await fetch(`${baseUrl}/products/`, { 
    
  })

  const responseData = await response.json()
  console.log('responsed data', responseData)

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData
}
export const getQuestion = async (difficulty, category) => {

  const response = await fetch(`${baseUrl}/questions/random?difficulty=${encodeURIComponent(difficulty)}&category=${encodeURIComponent(category)}`, { // using a query string
    method: "GET",
    
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData
}


export const sendGameResults = async(token, data) => {

  console.log('in the ui api', data)
  const response = await fetch(`${baseUrl}/game/results`, {
    method: "post", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }
  
  return responseData
}

