import express from "express";
import { createWorkout, getWorkout, getWorkouts} from "../controllers/workoutController.js";


const router = express.Router();

// GET all workouts
router.get("/", getWorkouts)

// GET single workkout
router.get("/:id", getWorkout)


// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new workout"})
})

// PATCH a new workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH a new workout"})
})



export default router;