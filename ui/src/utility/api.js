

//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";


//Get all products, if a query object is passed in the products will be searched on query parameters
export const getProducts = async (queryObject) => {
  let brandString = "";

  if (queryObject.brands.brand.length !== 0) {
    brandString = queryObject.brands.brand.join();
  }
  const response = await fetch(
    `${baseUrl}/products/?thickness=${encodeURIComponent(
      queryObject.thickness
    )}&size=${encodeURIComponent(
      queryObject.size
    )}&zipType=${encodeURIComponent(queryObject.zipType)}&price=${
      queryObject.price
    }&brands=${encodeURIComponent(brandString)}`,
    {
      method: "GET",
    }
  )

  const responseData = await response.json()
 
  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

//Get one product detail with product id
export const getProductDetail = async (id) => {
 
  const response = await fetch(`${baseUrl}/product/id/${id}}`, {
    method: "GET",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

//Get all reviews for a product based on product id
export const getReviews = async (id) => {
  console.log("in the api", id);
  const response = await fetch(`${baseUrl}/reviews/id/${id}`, {
    method: "GET",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

//Save a new product review
export const saveReview = async (data) => {
  
  const response = await fetch(`${baseUrl}/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
 
  if (!response.ok) {
    throw new Error(
      alert(responseData?.message)
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
}

//Update a product review based on review id
export const updateReview = async(data) => {
  
  const response = await fetch(`${baseUrl}/review/id/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();


  if (!response.ok) {
    throw new Error(
      alert(responseData?.message)
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }
  
  return responseData
}

//Delete a review based on review id
export const deleteReview = async (id) => {
 
  const response = await fetch(`${baseUrl}/review/id/${id}`, {
    method: "DELETE",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

export const getAdminDetail = async (style, retailer) => {
 
  const response = await fetch(`${baseUrl}/admin?style=${style}&retailer=${retailer}`, {
    method: "GET",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

