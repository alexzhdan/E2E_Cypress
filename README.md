Run test on local machine:

1) Download repository from git to your local machine

2) In cmd open repository with project 

3) run command: 'npm install cypress --save dev'  

4) In repository open file : 'cypress.json'. Check that baseUrl correspond to url of your application. If not, changed it and save

5) in cmd run command : 'npm run cy:open'



Using Docker for test:

1) check that docker host is running on your local machine

2) in cmd open repository with project

3) run command: 'docker build - <name of your immage> .'

4) run command: 'docker run -it --name <name of container> <name of image>
