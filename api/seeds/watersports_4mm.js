/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').insert([
    {
      "id":85,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-billabong-womens-synergy-43mm-back-zip-wetsuit-abjw100133-wild-black-p-43658.html",
      "name": "Womens Synergy 4/3mm Back Zip Wetsuit",
      "brand": "Billabong",
      "sku": "ABJW100133",
      "description": "The Synergy Series wetsuits deliver lightweight, premium heat, and innovative technology with superior value and durability. Made from stretchy and eco-conscious Superlight neoprene combined with glued and blind stitched sealed external seams, the women’s 4/3 Synergy Back Zip Full Wetsuit boasts excellent thermal retention. Graphene recycler lining at the front and back panels adds incredible strength and heat without adding bulk, while silicone stretch panels at the arms and legs let you get in and out with ease. Finished with a back zip entry, the Synergy delivers everything you demand from a premium wetsuit, without breaking the bank.",
      "price": "249.95 ",
      "sizes": "4, 6, 8, 10",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20Billabong%20Womens%20Synergy%2032mm%20Back%20Zip%20Wetsuit%20ABJW100132%20-%20Wild%20Black%20Main%20New.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":86,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-skins-womens-surflite-43mm-back-zip-wetsuit-sl43wbz-black-blue-tie-dye-p-44275.html",
      "name": "Womens Surflite 4/3mm Back Zip Wetsuit",
      "brand": "C-Skins",
      "sku": "C-SL43WBZ",
      "description": "The Surflite is the perfect suit that will enable you to discover the water all year round. The all new panel design has been carefully crafted to give the user great freedom of movement and a perfect fit. Fully sealed GBS seams, True Thickness neoprene and the all new GBS zip keeps heat locked in while the Xtend neoprene upper body makes this the most comfortable Surflite ever.",
      "price": "183.43 ",
      "sizes": "4, 6S, 6, 8S, 8, 10S, 10,14S, 12, 14, 16",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20C-Skins%20Womens%20Surflite%2043mm%20Back%20Zip%20Wetsuit%20C-SL43WBZ%20-%20Black%20%20Blue%20Tie%20Dye%20-%20Main.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":87,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2022-magic-marine-womens-ultimate-long-john-4mm-wetsuit-160400-black-p-40654.html",
      "name": "Womens Ultimate Long John 4mm Wetsuit",
      "brand": "Magic Marine",
      "sku": "160400",
      "description": "80% M-Flex 4mm neoprene long john developed using our latest material and technology to create our best winter long john yet. It features a polar lining combined with 70% M-Flex neoprene for maximum stretch and comfort designed to crossover the necessities of flexibility and warmth. Specifically designed for women, with a half zip chest entry system, allowing for comfort and a flattering fit. Combine with the Ultimate 3mm Neoprene Top for all over protection from the cold.",
      "price": "118.67 ",
      "sizes": "",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Magic-Marine-Womens-Ultimate-Long-John-4mm-Wetsuit-15001.160400---Black-1.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":88,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-billabong-womens-furnace-comp-43mm-chest-zip-wetsuit-abjw100147-midnight-trails-p-41543.html",
      "name": "Womens Furnace Comp 4/3mm Chest Zip Wetsuit",
      "brand": "Billabong",
      "sku": "ABJW100147",
      "description": "Boost your heat and your airs with the 4/3 Women's Furnace Comp Series Chest Zip Full Wetsuit. Delivering on sustainability without sacrifice, this cold-water competition performance wetsuit for women is now made with innovative eco-conscious materials. Geared for competition, the cold water full wetsuit is lined at the front and back panels with incredibly lightweight and strong Graphene-infused yarns, now infused with 100% recycled fibers, keepin'g you warmer and faster for longer. Made from upcycled car tires, the eco-conscious SMART Foam is topped with AIRLITE Recycler jersey, now made from recycled materials, radically reducing both weight and wind chill. A chest zip entry system allows for an easy on-off. Every layer is constructed with incredible flexibility for optimal performance.",
      "price": "419.95 ",
      "sizes": "2, 4, 6, 8, 10, 12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2022%20Billabong%20Womens%20Furnace%20Comp%2043mm%20Chest%20Zip%20Wetsuit%20F44F12%20-%20Midnight%20Trails.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":89,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-gul-womens-response-43mm-back-zip-wetsuit-re1248-grey-marbel-p-42828.html",
      "name": "Womens Response 4/3mm Back Zip Wetsuit",
      "brand": "GUL",
      "sku": "RE1248-C1",
      "description": "GUL's best selling wetsuit! The Response range is long lasting, durable and flexible. The perfect combination of value for money and performance. Constructed with glued and blindstitched seams to keep water out and 100% X-Flex super stretch neoprene, giving you ultimate freedom of movement. The Response wetsuit meets all the requirements for the all round watersports enthusiast.",
      "price": "140.99 ",
      "sizes": "4, 6, 6T, 8, 8T, 8/10, 10, 12, 14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2022%20Gul%20Womens%20Response%2043mm%20Back%20Zip%20Wetsuit%20RE1248-C1%20-%20Grey%20Marbel%20Main.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":90,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-gul-womens-response-43mm-back-zip-wetsuit-re1248-blue-teal-p-42823.html",
      "name": "Womens Response 4/3mm Back Zip Wetsuit",
      "brand": "GUL",
      "sku": "RE1248-C1",
      "description": "The Gul Response range is the perfect combination of value for money and performance. Constructed using GBS seams and X-Flex super stretch panels for comfort with seam free seat construction. Featuring highly durable Powertex4 knees (except shorti styles) to ensure an increased lifespan. The Response wetsuit meets all the requirements for the all-round watersports enthusiast.",
      "price": "140.99 ",
      "sizes": "4, 6, 6T, 8, 8T, 8/10, 10, 12, 14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2022%20Gul%20Womens%20Response%2043mm%20Back%20Zip%20Wetsuit%20RE1248-C1%20-%20Blue%20Teal%20Main.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    
    {
      "id":91,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-rip-curl-womens-bomb-43mm-zip-free-wetsuit-wsmyig-black-p-34791.html",
      "name": "Womens E-Bomb 4/3mm Zip Free Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSMYIG",
      "description": "The ultimate high performance wetsuit. Featuring Rip Curl’s latest E6 neoprene with Thermo Lining throughout the entire suit, combined with our newest zip free entry system for maximum paddling freedom and water seal.",
      "price": "319.99 ",
      "sizes": "4, 6, 8, 10, 12, 14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Rip-Curl-Womens-E-Bomb-Zip-Free-Wetsuit-WSMYJG---Black.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":92,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2021-rip-curl-womens-dawn-patrol-43mm-back-zip-wetsuit-wsm9hs-mid-blue-p-36538.html",
      "name": "Womens Dawn Patrol 4/3mm Back Zip Wetsuit WSM9HS",
      "brand": "Rip Curl",
      "sku": "WSM9DS",
      "description": "The Rip Curl Dawn Patrol Warmth is a brand new addition the range for this season, featuring a full flash dry lining internally to the front of the suit, which provides incredible warmth during those colder sessions! Truly the ultimate all-around wetsuit combining the features of a top end suit at an economical price. Whether you're getting into surfing or out there every weekend, this suit has you covered with its E5 neoprene and E5 Flash Lining, plus the entire suit is glued and blindstitched with seam taping for strength.  Warmth, stretch and flexibility at a great price.",
      "price": "174.99 ",
      "sizes": "12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Rip-Curl-Womens-Dawn-Patrol-Back-Zip-Wetsuit-WSM9DS---Mid-Blue.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":93,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-43mm-back-zip-wetsuit-wsm9hs-peach-p-43840.html",
      "name": "Womens Dawn Patrol 4/3mm Back Zip Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSM9HS",
      "description": "The Dawn Patrol offers performance and warmth features along with durability and great value. This wetsuit has\n many of the high-end features you will find in our Ultimate suits including E5 Flash Lining, E5 neoprene and E4\n Thermo lining.",
      "price": "279.95 ",
      "sizes": "4, 6, 8, 10, 12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20Rip%20Curl%20Womens%20Dawn%20Patrol%2043mm%20Back%20Zip%20Wetsuit%20WSM9HS%20-%20Peach%20main%20correct.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":94,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-roxy-womens-prologue-43mm-back-zip-wetsuit-erjw103072-black-p-35270.html",
      "name": "Womens Prologue 4/3mm Back Zip Wetsuit",
      "brand": "Roxy",
      "sku": "ERJW103072",
      "description": "",
      "price": "159.95 ",
      "sizes": "2, 4, 14, 16",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Roxy-Womens-Prologue-Back-Zip-Wetsuit-ERJW103073---Black.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":95,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2021-magic-marine-womens-ace-43mm-chest-zip-wetsuit-170107-navy-p-40017.html",
      "name": "Womens Ace 4/3mm Chest Zip Wetsuit",
      "brand": "Magic Marine",
      "sku": "170107",
      "description": "Leading sailing wetsuit design is the ACE wetsuit with its advanced technology and materials that allow you to begin the day ready for the conditions. The DryTec quickdry wetsuit revolutionizes the current offering to the sailing community. Within an innovation lab, this fabric has been developed and tested and dries 3 times faster than standard neoprene linings. The lining feels as a soft wool sweater and is placed in crucial locations in the chest and back to ensure maximum comfort.",
      "price": "183.43 ",
      "sizes": "XS,S",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/170107%20%201.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":96,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2022-rip-curl-womens-dawn-patrol-performance-eco-43mm-chest-zip-wetsuit-wsmyfv-purple-p-38861.html",
      "name": "Womens Dawn Patrol Performance Eco 4/3mm Chest Zip Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSMYFV",
      "description": "For the surfer who wants a quality wetsuit. Made with sustainability in mind.",
      "price": "183.99 ",
      "sizes": "14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2021%20Rip%20curl%20Womens%20Dawn%20Patrol%20Performance%2053mm%20Chest%20Zip%20Wetsuit%20WSMYEV%20-%20Puprle.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":97,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2022-billabong-womens-salty-dayz-43mm-chest-zip-wetsuit-f44f10-jungle-night-p-41544.html",
      "name": "Womens Salty Dayz 4/3mm Chest Zip Wetsuit",
      "brand": "Billabong",
      "sku": "F44F10",
      "description": "Stand out in the line-up with signature style and progressive performance. Equipped with Billabong wetsuit technology, including a chest zip and Graphene Recycler thermal lining at the internal chest and back panels, combined with silicon stretch lining at the lower legs and sleeves, the Surf Capsule Collection women's fullsuit is customized with palm printed panels. Combining style, performance and sustainability, the 4/3 Salty Dayz Full Wetsuit is now made with stretchy and eco-conscious Superlight neoprene and water-based adhesives.",
      "price": "254.99 ",
      "sizes": "2, 4, 6, 8, 10, 12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2022%20Billabong%20Womens%20Salty%20Dayz%2043mm%20Chest%20Zip%20Wetsuit%20F44F10%20-%20Jungle%20Night.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":98,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-43mm-back-zip-wetsuit-wsm9qw-black-p-37966.html",
      "name": "Womens Dawn Patrol 4/3mm Back Zip Wetsuit",
      "brand": "Rip Curl",
      "sku": "WSM9QW",
      "description": "The Rip Curl Dawn Patrol Warmth is a brand new addition the range for this season, featuring a full flash dry lining internally to the front of the suit, which provides incredible warmth during those colder sessions! Truly the ultimate all-around wetsuit combining the features of a top end suit at an economical price. Whether you're getting into surfing or out there every weekend, this suit has you covered with its E5 neoprene and E5 Flash Lining, plus the entire suit is glued and blindstitched with seam taping for strength.  Warmth, stretch and flexibility at a great price.",
      "price": "279.95 ",
      "sizes": "4, 6, 8, 10, 10T, 12",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/Rip-Curl-Womens-Dawn-Patrol-Back-Zip-Wetsuit-WSM9RW---Black.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":99,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-gul-womens-response-43mm-chest-zip-wetsuit-fx1215c2-black-recore-p-42971.html",
      "name": "Womens Response FX 4/3mm Chest Zip Wetsuit",
      "brand": "GUL",
      "sku": "FX1215/C2",
      "description": "Surf consciously without compromising on flexibility. Flexor recore eco wetsuits are made with limestone foam and are laminated with recore x-flex and lined with our new recycled nylon, thereby turning waste into re-usable yarns. Our recycled recore nylon is extremely flexible and has a smooth hand feel.",
      "price": "168.99 ",
      "sizes": "4, 6, 8, 10",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/FX1215.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    },
    {
      "id":100,
      "retailer_id": "WO1",
      "url": "https://www.watersportsoutlet.com/2023-skins-womens-surflite-43mm-back-zip-wetsuit-sl43wbz-slate-multi-p-44276.html",
      "name": "Womens Surflite 4/3mm Back Zip Wetsuit",
      "brand": "C-Skins",
      "sku": "C-SL43WBZ",
      "description": "The Surflite is the perfect suit that will enable you to discover the water all year round. The all new panel design has been carefully crafted to give the user great freedom of movement and a perfect fit. Fully sealed GBS seams, True Thickness neoprene and the all new GBS zip keeps heat locked in while the Xtend neoprene upper body makes this the most comfortable Surflite ever.",
      "price": "183.43 ",
      "sizes": "4, 6S, 6, 8S, 8, 10, 12, 14",
      "image": "https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20C-Skins%20Womens%20Surflite%2043mm%20Back%20Zip%20Wetsuit%20C-SL43WBZ%20-%20Slate%20%20Multi-%20Main.700x700.jpg",
      "style_id": "3",
      "gender": "Womens"
    }
  ]);
};
