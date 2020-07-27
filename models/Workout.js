const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
  
});

const WorkoutSchema = new Schema({
  day: Date,
  totalDuration: Number,
  exercises: [ExerciseSchema]
});

WorkoutSchema.methods.setTotalDuration = function() {
  this.totalDuration = this.exercises.reduce((total,exercise) => {
    total.duration = total.duration + exercise.duration
    return total;
  }).duration;
  console.log(this.totalDuration);
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;