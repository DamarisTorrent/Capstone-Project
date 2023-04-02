/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('style').del()
  await knex('style').insert([
    {
      id: 1,
      name: "2mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 2,
      name: "3mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 3,
      name: "4mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 4,
      name: "5mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 5,
      name: "Hoods",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 6,
      name: "Boots",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 7,
      name: "Gloves",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 8,
      name: "Long Sleeve Springsuits",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 9,
      name: "Short Sleeve Springsuits",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 10,
      name: "Tops",
      notes: "",
      dateCreated: new Date(Date.now())
    }


  ]);
};
