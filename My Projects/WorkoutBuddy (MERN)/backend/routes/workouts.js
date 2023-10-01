import express from "express";
import { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout

} from "../controllers/workoutController.js";
import requireAuth from "../middleware/requireAuth.js";


const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get("/", getWorkouts)

// GET single workkout
router.get("/:id", getWorkout)


// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// PATCH a new workout
router.patch("/:id", updateWorkout)



export default router;