# Welcome to Authentication Service

## Project Setup 
- clone the project on your local 
- Execute `npm i` in the root directory.
- Create `.env` file in the root directory and add the following environment variable
    - `PORT = 3001`
    - `JWT_KEY = AUTHSERVICE`
    - `DB_SYNC = `false -> for syncing the database initially make it true , after executing once change it to false because we don't want to do syncing every time we start the server.
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json code

```
{
  "development": {
    "username": "<database_username>",
    "password": "<database_password>",
    "database": "AUTH_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "<database_name (example-> mysql) >"
  }
}

```

- Once you've added your db config file as listed above ,  go to the src folder form your terminal and execute
    `npx sequelize db:create`
- After creating database , now create all the tables by executing `npx sequelize db:migrate:all`

```
- DB design
    - User Table
    - Role Table

- Tables association
    - User has Many Roles 
    - Single Roles belongs to Many Users
    Hence Many to Many relationship between two tables

```
- Final Run the `src/index.js` file to run the Server.
 