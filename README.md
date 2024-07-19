This team member assignment uses MongoDB (Free tier) for CRUD ops. It connects to Atlas MongoDB on the cloud for the operations. 

Creds are in .env file (Committed for project demonstration purposes - ideally they should be taken from AWS env variables)

=============================================================

Clone the repo - git clone https://github.com/Soumikbhat/team-assignment.git and then use git checkout develop to switch to develop branch.

Steps to run
1. Go to the Assignment Folder (cd Assignment)

2. Install NodeJS and Node Package Manager (Follow https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. Run npm install - this should create the node_modules folder inside Assignment

4. Once the above steps are done, run npm run start. You should be seeing this log - 
    LOG [NestApplication] Nest application successfully started +5ms

5. Once this log has appeared, navigate to http://localhost:3000/api/docs#/ 

6. On the above page, you will be able to see the Swagger Doc UI. All the endpoints have their respective signatures.

