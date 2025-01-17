# Quiz Application Backend
 
This is the backend for the Quiz Application, built with Node.js, Express, and SQLite3 for database management.
 
## Getting Started
 
Follow the steps below to set up and run the backend server.
 
### Step 1: Initialize the Project
 
Run the following command to initialize a new Node.js project:
 
```bash
npm init -y
```
 
This creates a `package.json` file for your project.
 
### Step 2: Install Dependencies
 
Install the following dependencies:
 
- **express**: A fast, unopinionated, and minimalist web framework for Node.js.
- **knex**: A SQL query builder for JavaScript.
- **sqlite3**: A library for SQLite, a lightweight, serverless database.
- **dotenv**: A module for loading environment variables from a `.env` file.
 
```bash
npm install express knex sqlite3 dotenv mysql2
 
```
 
### Step 3: Initialize Knex
 
Run the following command to create a `knexfile.js` for database configuration:
 
```bash
npx knex init
```
 
### Step 4: Create Migrations
 
Use Knex to create a migration file for the quizzes table:
 
```bash
npx knex migrate:make create_quizzes_table
```
 
Write your migration schema in the generated file (e.g., `migrations/xxxx_create_quizzes_table.js`).
 
Run the migration to create the table in your SQLite database:
 
```bash
npx knex migrate:latest
```
 
### Step 5: Seed the Database
 
Create a seed file to populate the quizzes table with initial data:
 
```bash
npx knex seed:make seed_quizzes
```
 
Write your seed data in the generated file (e.g., `seeds/xxxx_seed_quizzes.js`).
 
Run the seed file to populate the database:
 
```bash
npx knex seed:run
```
 
### Step 6: Start the Server
 
Run the server using either of the following commands:
 
```bash
node server.js
```
 
or
 
```bash
npm start
```
 
Ensure that your server script is named `server.js` and is properly configured to handle routes, database connections, and middleware.
 
## Key Dependencies
 
- **Express**: For handling HTTP requests and routing.
- **Knex**: For database query building and migration management.
- **SQLite3**: For database operations.
- **dotenv**: For managing environment variables.
 
## Example Workflow
 
1. Initialize the project: `npm init -y`
2. Install dependencies: `npm install express knex sqlite3 dotenv`
3. Configure Knex: `npx knex init`
4. Create and run migrations:
   - `npx knex migrate:make create_quizzes_table`
   - `npx knex migrate:latest`
5. Seed the database:
   - `npx knex seed:make seed_quizzes`
   - `npx knex seed:run`
6. Start the server: `node server.js` or `npm start`
 
With this setup, your backend server will be ready to handle quiz-related operations efficiently.
