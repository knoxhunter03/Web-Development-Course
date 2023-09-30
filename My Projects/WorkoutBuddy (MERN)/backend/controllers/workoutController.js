import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}


// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    // check if that's a valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }
    const workout = await Workout.findById(id)

    // check if a valid workout is present
    if (!workout)
        return res.status(404).json({error: "No such workout"});

    res.status(200).json(workout);
}


// CREATe a new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body;

    // add document to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// DELETE a new workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

     // check if that's a valid id
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndDelete({
        _id: id
    })

    if (!workout)
    return res.status(404).json({error: "No such workout"});

    res.status(200).json(workout);
    
    
}

// UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    
      // check if that's a valid id
      if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate({
        _id: id },
        {
           ...res.body
        }
    )

    if (!workout)
    return res.status(404).json({error: "No such workout"});

    res.status(200).json(workout);

}

export {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} ;