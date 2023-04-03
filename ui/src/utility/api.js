//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const getProducts = async (queryObject) => {
  
  let brandString = ""
  
  if (queryObject.brands.brand.length !== 0) {
    brandString = queryObject.brands.brand.join()
  }
  const response = await fetch(`${baseUrl}/products/?thickness=${encodeURIComponent(queryObject.thickness)}&size=${encodeURIComponent(queryObject.size)}&zipType=${encodeURIComponent(queryObject.zipType)}&price=${queryObject.price}&brands=${encodeURIComponent(brandString)}`, { 
    method: "GET",
  })

  const responseData = await response.json()
  console.log('responsed data', responseData)

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData
}

export const getProductDetail = async (id) => {

  console.log('in the api', id)
  const response = await fetch(`${baseUrl}/product/id/${id}}`, { 
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

