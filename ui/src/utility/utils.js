// randomizes an array
export const shuffle = (array) => array.sort((a, b) => 0.5 - Math.random())

//These are women's wetsuit sizes
export const displaySizes = ["0", "2", "4", "6", "8", "10", "12", "14", "16"]

//Brands to be displayed in checkboxes
export const displayBrands = [
  "Rip Curl",
  "O'Neill",
  "Billabong",
  "Roxy",
  "Patagonia",
  "Xcel",
  "Sisstrevolution"
]

export const dateFormatter = (date) => {
  
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options)

}
