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
      style_name: "2mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 2,
      style_name: "3mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 3,
      style_name: "4mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 4,
      style_name: "5mm",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 5,
      style_name: "Hoods",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 6,
      style_name: "Boots",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 7,
      style_name: "Gloves",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 8,
      style_name: "Springsuits",
      notes: "",
      dateCreated: new Date(Date.now())
    },
    {
      id: 10,
      name: "Tops",
      style_name: "",
      dateCreated: new Date(Date.now())
    }


  ]);
};
