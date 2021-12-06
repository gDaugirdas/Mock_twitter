# Bitter

Twitter like - social media app web app.

## About

Client side is built with React, utilizing Styled Components.<br/>

Server side is built with Node, Express and MySQL. <br/>

Docker is used to run the project.

## Development

- Create a file called `.env` in client root directory, define URL local variable to back-end API server `REACT_APP_BASE_API_URL=YOUR-SERVER-API-URL`.
If you plan on running app locally define url like so `REACT_APP_BASE_API_URL=http://localhost:8080/`.
Boilerplate for client `.env` file can be found in client root directory, `.env.example` file.

- Create Google Cloud account and enable Vision AI and Cloud Storage services.<br/>
Download Google API credrentials `.json` file, rename it `keys.json` and paste it
in `/server/src/config/` folder. This will connect the server to Google Cloud services.

- Create a file called `.env` in server root directory, define local variables. If you plan on running app locally define PORT like so `PORT=8080`.
Boilerplate for server `.env` file can be found in server root directory, `.env.example` file.

- `PORT=PORT-SERVER-WILL-RUN-ON`

- `DB_USER=YOUR-MYSQL-USERNAME`
- `DB_PORT=YOUR-MYSQL-PORT`
- `DB_HOST=YOUR-MYSQL-HOST`
- `DB_PASS=YOUR-MYSQL-PASSWORD`
- `DB_DATABASE=YOUR-MYSQL-DATABASE`

- `GCLOUD_STORAGE_BUCKET=YOUR-GC-STORAGE_BUCKET`
- `GCLOUD_STORAGE_PROJECT_ID=YOUR-GC-PROJECT-ID`

- `JWT_SECRET=YOUR-JWT-SECRET`

- Lastly create data tables in your MYSQL database.

- `CREATE TABLE bf_comments (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, tweet_id INT, comment TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`<br/>

- `CREATE TABLE bf_likes (id INT AUTO_INCREMENT PRIMARY KEY, tweet_id INT, user_id INT, liked INT)`<br/>

- `CREATE TABLE bf_tweets (id INT AUTO_INCREMENT PRIMARY KEY, tweet_text TEXT, user_id INT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, edited_at TIMESTAMP NULL DEFAULT NULL)`<br/>

- `CREATE TABLE bf_users (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), profile_picture VARCHAR(255),created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`

- To run the client side of the app run command `docker-compose -f client/docker-compose.yml up -d --build` in root directory
- To run the server side of the app  in developer mode, run command `docker-compose -f server/docker-compose.yml -f server/docker-compose.dev.yml up -d --build` in root directory

## Deployment

- Go to project `/client` directory and run in terminal: `npm run build` (this command compiles source code and saves all generated files in `/build` folder) or use Docker command and deploy client side as a container.
- To run the server side of the app in production mode, run command `docker-compose -f server/docker-compose.yml -f server/docker-compose.prod.yml up -d --build` in root directory




