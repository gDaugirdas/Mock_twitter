# Onlooker

## About

Onlooker processes images and identifies multiple objects discovered in them.<br/>

This app utilizes Google Cloud services, like Vision AI and Cloud Storage .<br/>

Client side is built with React, utilizing Styled Components.<br/>

Server side is built with Node, Express and MySQL

## Development

- Go to project root directory and run `npm install` in terminal, then run command `npm run postInstall`
(These commands install all dependencies needed for project. No need to do this if no new packages were added and you already installed them before)


- Create a file called `.env` in client root directory, define URL local variable to back-end API server `REACT_APP_API_URL=YOUR-SERVER-API-URL`.
If you plan on running app locally define url like so `REACT_APP_API_URL=http://localhost:8080/v1`.
Boilerplate for client `.env` file can be found in client root directory, `.env.example` file.

- Create Google Cloud account and enable Vision AI and Cloud Storage services.<br/>
Download Google API credrentials `.json` file, rename it `keys.json` and paste it
in `/server/src/config/` folder. This will connect the server to Google Cloud services.

- Create a file called `.env` in server root directory, define local variables. If you plan on running app locally define PORT like so `PORT=8080`.
Boilerplate for server `.env` file can be found in server root directory, `.env.example` file.

- `PORT=PORT-SERVER-WILL-RUN-ON`
- `GCLOUD_STORAGE_BUCKET=NAME-OF-YOUR-BUCKET`
- `GCLOUD_STORAGE_PROJECT_ID=NAME-OF-YOUR-PROJECT`
- `DB_USER=YOUR-MYSQL-USERNAME`
- `DB_PORT=YOUR-MYSQL-PORT`
- `DB_HOST=YOUR-MYSQL-HOST`
- `DB_PASS=YOUR-MYSQL-PASSWORD`
- `DB_DATABASE=YOUR-MYSQL-DATABASE`

- Lastly create two tables in your MYSQL server.

- `CREATE TABLE detectedObjects (id INT AUTO_INCREMENT PRIMARY KEY, request_id INT, name TEXT, score DECIMAL(3,2))`<br/>

- `CREATE TABLE scannedFiles (id INT AUTO_INCREMENT PRIMARY KEY, imageUrl TEXT, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`

- From root folder in terminal run `npm run dev` (this command runs client and server development environment)

## Tests

Client side testing is available, cd into `/client` directory and run `npm run test` in terminal. This performs React component snapshot testing.

## Deployment

Client. Go to project `/client` directory and run in terminal: `npm run build` (this command compiles source code and saves all generated files in `/build` folder)

## Ideas for futher improvement

- Adding vertices around detected objects and drawing vertices within uploaded image
- Providing user input for correcting AI predictions. This data could later be used to train AI.
- Styling could be imporved using Material UI or Carbon Components.
- Adding optional user register with some additional functionality would let us profile our users by images they upload. Vision AI allows brand label detection. This could later be used for targeted advertising
on social media platforms.
- Vison AI could be used to describe images to people with disabilities, though perhaps some futher advance in AI technology is needed.



