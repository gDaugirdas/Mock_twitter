# Bitter

## About

Client side is built with React, utilizing Styled Components.<br/>

Server side is built with Node, Express and MySQL

## Development

- Go to project root directory and run `npm install` in terminal, then run command `npm run postInstall`
(These commands install all dependencies needed for project. No need to do this if no new packages were added and you already installed them before)

- Create a file called `.env` in client root directory, define URL local variable to back-end API server `REACT_APP_API_URL=YOUR-SERVER-API-URL`.
If you plan on running app locally define url like so `REACT_APP_API_URL=http://localhost:8080/v1`.
Boilerplate for client `.env` file can be found in client root directory, `.env.example` file.

- Create a file called `.env` in server root directory, define local variables. If you plan on running app locally define PORT like so `PORT=8080`.
Boilerplate for server `.env` file can be found in server root directory, `.env.example` file.

- `PORT=PORT-SERVER-WILL-RUN-ON`

- `DB_USER=YOUR-MYSQL-USERNAME`
- `DB_PORT=YOUR-MYSQL-PORT`
- `DB_HOST=YOUR-MYSQL-HOST`
- `DB_PASS=YOUR-MYSQL-PASSWORD`
- `DB_DATABASE=YOUR-MYSQL-DATABASE`


- From root folder in terminal run `npm run dev` (this command runs client and server development environment)



