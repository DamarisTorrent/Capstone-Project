/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').insert([
    {
      "id": 101,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2022-billabong-womens-synergy-54mm-chest-zip-hooded-wetsuit-abjw200100-black-tie-dye-p-38025.html",
      "name": "Womens Synergy 5/4mm Chest Zip Hooded Wetsuit",
      "brand": "Billabong",
      "sku": "ABJW200100",
      "description": "is now made from recycled laminates, saving millions of plastic bottles from landfills and our oceans.",
      "price": "183.99",
      "sizes": "2",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2021%20Billabong%20Womens%20Synergy%2054mm%20Chest%20Zip%20Hooded%20Wetsuit%20ABJW200100%20Black%20Tie%20Dye_side.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    },
    {
      "id": 102,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-xcel-womens-drylock-65mm-hooded-chest-zip-wetsuit-wc65dhn1-black-p-42845.html",
      "name": "Womens Drylock 6/5mm Hooded Chest Zip Wetsuit",
      "brand": "Xcel",
      "sku": "WC65DHN1",
      "description": "The drylock series: unmatched warmth and performance",
      "price": "499.95",
      "sizes": "4,8,10,12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2022%20Xcel%20Womens%20Drylock%2065mm%20Hooded%20Chest%20Zip%20Wetsuit%20WC65DHN1%20-%20Black%20Main.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    },
    {
      "id": 103,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-54mm-hooded-chest-zip-wetsuit-wsmyhw-black-p-34794.html",
      "name": "Womens Dawn Patrol 5/4mm Hooded Chest Zip Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSMYHW",
      "description": "The Rip Curl Dawn Patrol Warmth is a brand new addition to the range for this season, featuring a flash dry lining internally to the front of the suit and on the main back panel, which provides incredible warmth during those colder sessions! Truly the ultimate all-around wetsuit combining the features of a top end suit at an economical price. Whether you're getting into surfing or out there every weekend, this suit has you covered with its E5 neoprene and E5 Flash Lining, plus the entire suit is glued and blindstitched with seam taping for strength.  Warmth, stretch and flexibility at a great price.",
      "price": "319.95",
      "sizes": "4,6,8,10,12,14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Rip-Curl-Womens-Dawn-Patrol-Hooded-Chest-Zip-Wetsuit-WSMYHW---Black.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    },
    {
      "id": 104,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-mystic-womens-gem-643mm-hooded-chest-zip-wetsuit-35000220015-black-p-39010.html",
      "name": "Womens Gem 6/4/3mm Hooded Chest Zip Wetsuit",
      "brand": "Mystic",
      "sku": "35000.220015",
      "description": "Gem, the proud matriarch of our women's range. Riding this hooded fullsuit is like cranking up the heat in your car after a long fulfilling session. Hell, the Gem is so warm it’s almost like eating a pizza out of the oven! A warm suit with a lot of stretch. The days of using the cold as an excuse are over. Get the Gem, lose the cold!",
      "price": "356.12",
      "sizes": "S,XL",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2021%20Mystic%20Womens%20Gem%20643mm%20Chest%20Zip%20Hooded%20Wetsuit%2035000.220015%20-%20Black%20-%20Front.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    },
    {
      "id": 105,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-xcel-womens-infiniti-65mm-hooded-chest-zip-wetsuit-xwq65zhn0-black-p-39316.html",
      "name": "Womens Infiniti X2 6/5mm Hooded Chest Zip Wetsuit",
      "brand": "Xcel",
      "sku": "XWQ65ZHN0",
      "description": "",
      "price": "520",
      "sizes": "6T,8S,12,14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Xcel%20Womens%20Infiniti%20X2%20Hooded%20Wetsuit%20XWQ65ZHN0%20-%20Black.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    },
    {
      "id": 106,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-54mm-hooded-chest-zip-wetsuit-wsmyhw-black-p-35107.html",
      "name": "Womens Dawn Patrol 5/4mm Hooded Chest Zip Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSMYHW",
      "description": "The Rip Curl Dawn Patrol Warmth is a brand new addition the range for this season, featuring a full flash dry lining internally to the front of the suit, which provides incredible warmth during those colder sessions! Truly the ultimate all-around wetsuit combining the features of a top end suit at an economical price. Whether you're getting into surfing or out there every weekend, this suit has you covered with its E5 neoprene and E5 Flash Lining, plus the entire suit is glued and blindstitched with seam taping for strength.  Warmth, stretch and flexibility at a great price.",
      "price": "319.95",
      "sizes": "14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Rip-Curl-Womens-Dawn-Patrol-Hooded-Chest-Zip-Wetsuit-WSMYHW---Black.700x700.jpg",
      "style_id": "4",
      "gender": "Womens"
    }
  ]);
};
