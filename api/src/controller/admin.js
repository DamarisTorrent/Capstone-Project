const { createScrapeImport } = require("../service/admin");

exports.getAdminDetail = async (req, res) => {
  try {
    console.log("Admin Detail");

    const { style, retailer } = req.query;

    console.log("style", style);
    console.log("retailer", retailer);
    console.log("directory", __dirname);

    const dataString = "../assets/" + retailer + "_" + style + ".json";
    console.log(dataString)
    const data = require(dataString);
    
    createScrapeImport(data);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
