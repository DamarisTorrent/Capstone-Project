/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('retailer').del()
  await knex('retailer').insert([
    {
      id: "CL1",
      retailer_name: "Cleanline Surf",
      domain: "https://www.cleanlinesurf.com",
      location: "Seaside, OR",
      tagline: "40 Years of Stoke",
      shipping_info: "Free Shipping $75+",
      dateCreated: new Date(Date.now())
    },
    {
      id: "WO1",
      retailer_name: "Watersports Outlet",
      domain: "https://www.watersportsoutlet.com",
      location: "Rancho Santa Margarita, CA",
      tagline: "We Are Watersports",
      shipping_info: "Free Shipping $99+",
      dateCreated: new Date(Date.now())
    },
    {
      id: "WW1",
      retailer_name: "Wetsuit Wearhouse",
      domain: "https://www.wetsuitwearhouse.com",
      location: "Williamsport, MD",
      tagline: "Over 20,000 wetsuits & accessories in stock today!",
      shipping_info: "Free Shipping $100+",
      dateCreated: new Date(Date.now())
    }

  ]);
};
