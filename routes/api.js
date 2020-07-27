const router = require("express").Router();
const mongoose = require("mongoose");
let db = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.set('debug', true);

router.get("/api/workouts", (req,res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(workouts => {
      workouts.forEach((workout) => workout.setTotalDuration())
      res.json(workouts);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/api/workouts/:id", (req,res) => {
  const id = req.params.id;
  const exercise = req.body;

  db.Workout.findOneAndUpdate(
    { _id: id }, 
    { 
      $push: { exercises: exercise },
      $set: { day: new Date().getDate() },
      $inc: { totalDuration: exercise.duration } 
    }, 
    {new: true}
  )
  .then(workout => {
    console.log("add workout success", workout);
    res.json(workout);
  })
  .catch(err => {
    console.log("add workout error", err);
    res.json(err);
  });
});

router.post("/api/workouts", (req,res) => {
  const workout = req.body;
  db.Workout.create(workout)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req,res) => {
  db.Workout.find({})
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err); 
  })
});

module.exports = router;