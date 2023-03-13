# <h1>Server Side of Smart Brain</h1>
##### -> <a href="https://github.com/Aleksandar15/smart-brain-alek">Here</a> is my frontend repository.
#### About my Full-Stack Smart Brain App:

I created this app using React on the frontend, while NodeJS with Express on the backend & PostgreSQL database. With `Clarifai API` feature used to detect faces of an image - which then the total count number of "detected faces" are stored on each user's data.

#### Visit my live website here: https://smart-brain-alek.netlify.app

##### Test login user:

- Use the "`Login as Guest`" feature.

##### My PERN Stack technologies:

###### Postgres DB + ExpressJS + ReactJS + NodeJS

## Run my frontend project

- Clone this project.
- Navigate (cd) into your project directory.
- Run `npm install` in your command line.
- Run `npm start` in your command line.
- Visit http://localhost:8080 in your browser!

### HOW TO's

###### How to deploy server+database on Render.com:
1. Deploy this server -> Render provide a simple connection with GitHub & Deploy
2. Create a database (PostgreSQL)
3. Go to the database *info* section -> *connections* -> Copy the *"External Database URL"*
4. Open your CLI (ex. PowerShell for Windows) -> run command `psql paste-the-url-by-render`
5. Once connected run the <a href="https://github.com/Aleksandar15/smart-brain-alek_server/blob/master/database.sql">SQL commands</a>.
6. In your server's *Environment* settings include 3 keys: 
-  1. *Clarifai_KEY* (your key);
-  2. *DATABASE_URL* (the *External Database URL*)
-  3. *PORT*: *10000*

###### How to clone the project?

##### Clone with HTTPS URL: `git clone https://github.com/Aleksandar15/smart-brain-alek_server.git`

##### Clone with SSH URL: `git clone git@github.com:Aleksandar15/smart-brain-alek_server.git`

###### How to connect to the server?

##### Clone the frontend code from <a href="https://github.com/Aleksandar15/smart-brain-alek">here</a> & follow the instructions there.
