# Administration Manual

This manual will help you get a copy of this app either local or remote on a web server.

### Local Server

#### Initial Setup
1. Sign up on [GitHub](https://github.com/join)
2. Download the [Node.js](https://nodejs.org/en/) installer and run it 
3. Download [Git Bash](https://git-scm.com/downloads)
4. Verify that Node.js has been installed, by typing `node --version` in Git Bash
5. npm is distributed with Node.js, verify that you have npm installed, by typing `npm --version` in Git Bash
6. Clone the app using git bash `git clone git@github.com:RhesPosse/TicTacToe.git`
7. Move into the app by typing `cd TicTacToe` in Git Bash
8. Run `npm install` in Git Bash to install the modules needed for the app

#### Run the app
1. Enter `npm run build` to build the file
2. Run `npm start` to start the app
3. The app is now running on localhost:5000

### External server

To run the app on an external server you will need to use Circle CI and Heroku

#### Circle CI
1. Sign up on [Circle CI](https://circleci.com/signup/) using your GitHub account.
2. Add the repository to your CircleCI account as a project by going to https://circleci.com/add-projects/gh/REPLACE_WITH_USERNAME
3. This will add a folder ".circleci" to the app on your computer, which is essential for CircleCI to work.

#### Heroku
1. Sign up on [Heroku](https://signup.heroku.com/)
2. Setup the [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli)
3. Go to Git Bash and sign in into Heroku by typing `heroku login`
4. Create a new Heroku app by typing `git remote add heroku git@heroku.com:TicTacToe-heroku.git`
5. Go to [Heroku.com](https://dashboard.heroku.com/apps) to see the web address of the app

Note that the app is live on https://tictactoe-heroku23.herokuapp.com/

### Maintenance
Pushing new commits will trigger CircleCI to run tests to check the code. 
