How to run:



Assumptions:
- Utilisation of ORM over raw sql (TypeORM due to native packages from nestjs)i
- Newest first is a core feature so it is baked into the injectable. Not modularly created to allow for sorting down the line. 
- Safely remove the About Us page, so Home will directly connect to Contact us and Contact list
- Home page being barebones is OK for now as its sole purpose is to allow for navigation to core components
- Good practice to auto redirect back to home after a thank you message (5 second timeout)
- Links under send message are non-functional for this task
- Utilising axios in next to access apis
- Not handling styling on excessibly long notes



AI Utilisation:
- Boilerplate docker compose for postgres db

- Assist me with learning nest.js
  (First time utilising, thought it was a good chance to learn with this project)
