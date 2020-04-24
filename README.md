# Better Call Saul 
This is a Money Manager / Expenses Tracker app created in React.

## Requirement 
- Node [Install from here](https://nodejs.org/en/)
- Yarn [Install from here](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- MongoDB instance [Get it from here](https://www.mongodb.com/)

## Repository Information
- `/client` contains REACT code.
- `/server` contains Node.js code

## How to clone 
- Run this command on terminal `https://github.com/tanwanimohit/better-call-saul.git`
- Goto the root of the repository. `cd better-call-saul`
- run `yarn install` this will install all the dependecies.
- Make Sure you have dev Dependencies as well.

## Add config.env
Goto `Server/Conifg` folder and created a file `config.env` and add this code.
```
NODE_ENV=development
PORT=5000
MONGO_URI=paste-your-mongo-uri-here
```

## How to Run
- To run react/front-end app only type `yarn client` (it will run on port 3000).
- To run server/back-end only type `yarn server` (it will run on port 5000).
- To run full stack type `yarn dev` (it will only work in developement server).
- To build the app `yarn build`.
- To run production app `yarn start`. (change the NODE_ENV to production)

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.