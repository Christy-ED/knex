/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('employees').del()
  await knex("employees").insert([
    {
      name: "Malik Brookins ",
      age: 35,
      email: "Malik.brookins@example.com",
      phone: "123-456-7890",
      address: "140 Main St",
      city: "Springfield",
      state: "PA",
      country: "USA",
      zip: "19401",
      salary: 75000,
      department: "Engineering",
      position: "Software Developer",
      is_active: true,
      hire_date: "2024-01-15",
      manager: "Jane Smith",
      team: "Backend",
      projects: 5,
      bonus: 5000,
      on_probation: false,
      dependents: 1,
      skills: "JavaScript, Node.js, SQL",
      notes: "Excellent team player",
      emergency_contact: "Emily Brookins",
      emergency_phone: "987-654-3210",
    },
    {
      name: "Ariel Johnson",
      age: 28,
      email: "ariel.johnson@example.com",
      phone: "555-123-4567",
      address: "456 Oak St",
      city: "Madison",
      state: "WI",
      country: "USA",
      zip: "53703",
      salary: 62000,
      department: "Marketing",
      position: "Marketing Specialist",
      is_active: true,
      hire_date: "2024-03-20",
      manager: "Tom Adams",
      team: "Campaigns",
      projects: 3,
      bonus: 2000,
      on_probation: false,
      dependents: 0,
      skills: "SEO, Content Writing, Social Media",
      notes: "Strong communication skills",
      emergency_contact: "Bob Johnson",
      emergency_phone: "111-222-3333",
    },
  ]);
};
