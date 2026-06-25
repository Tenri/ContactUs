## How to run:

### Prerequisites
- Have Docker Desktop installed
- Node.js 20+

### Steps:
1. Clone the repo:
https://github.com/Tenri/ContactUs/

2. navigate to the correct directory
cd ContactUs/

3. Start all docker services by running:
docker-compose up --build


4. Access the application:
- Frontend runs at: https://localhost:3000
- Backend runs at: https://localhost:3001
- Postgres database runs interally on port 5432



## Assumptions:
- Utilisation of ORM over raw sql (TypeORM due to native packages from nestjs)
- Newest first is a core feature so it is baked into the injectable. Not modularly created to allow for sorting down the line. 
- Safely remove the About Us page, so Home will directly connect to Contact us and Contact list
- Home page being barebones is OK for now as its sole purpose is to allow for navigation to core components
- Good practice to auto redirect back to home after a thank you message (5 second timeout)
- Links under send message are non-functional for this task
- Utilising axios in next to access apis
- Not handling styling on excessivly long notes
- Australian mobile number validation means either "04xxxxxxxx" or "614xxxxxxxx"
- Maintain Synchronize: on in nest as this is a test project. In prod this should be turned off due to it potentially causing db issues.


## AI Utilisation:
- Boilerplate docker compose for postgres db
- Assist me with learning nest.js
  (First time utilising, thought it was a good chance to learn with this project)
- Quickly match styling across website
- Assistance in building out dockerfiles
- Heavy assistance debugging docker quicks with API referencing
