const { createScrapeImport } = require('../service/admin')





exports.getAdminDetail = async (req, res) => {
 
try{
  console.log("Admin Detail");
  

const WO1_springsuits = require('../assets/WO1_springsuits.json')
const WO1_2mm = require('../assets/WO1_2mm.json')
const WO1_3mm = require('../assets/WO1_3mm.json')
const WO1_4mm = require('../assets/WO1_4mm.json')
const WO1_5mm = require('../assets/WO1_5mm.json')
const WO1_tops = require('../assets/WO1_tops.json')

const CL1_5mm = require('../assets/CL1_5mm.json')


const {
  style,
  retailer
} = req.query

console.log("style", style)
console.log("retailer", retailer)
console.log("directory", __dirname)

const dataString = "../assets/" + retailer + "_" + style + ".json"
console.log(dataString)
const data = require(dataString)
    createScrapeImport(data)

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}


