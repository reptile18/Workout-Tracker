# Workout Tracker

![Screenshot of Workout Tracker Application](assets/preview.png)
Node-Express app using Mongoose for tracking workouts

## Table of Contents
- [Workout Tracker](#workout-tracker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Front End](#front-end)
    - [Back End](#back-end)
  - [Launch](#launch)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Author](#author)

## Installation

### Front End
After cloning the repository, type:
```
npm install
```
to install all dependencies

### Back End
Make sure Mongo is running.

## Launch

To start the express server, type:
```
npm start
```
or
```
node ./server.js
```

## Usage

After running the application and visiting the url, there should be a popup prompting you to create a workout if one doesn't exist. Select New Workout.

After selecting resistance or cardio, override the defaults for the exercise details, click Add Exercise.

Notice the home screen now includes details for the added workout.

Continue adding exercises by clicking Add Exercise and editing details.

Each time, watch the dashboard update with the exercise details.

Click the New Workout button again to discard the last workout and create a new set of exercises.

## Testing 
To start the app with test data populated, run 
```
npm run seed
```

## Author

* **Johnny Li** - *Initial work* - [reptile18](https://github.com/reptile18)
