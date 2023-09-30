import express from "express";

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// GET single workkout
router.get("/:id", (req, res) => {
    res.json({mssg: "GET single workout"})
})


// POST a new workout
router.post("/", (req, res) => {
    res.json({mssg: "POST a new workout"})
})

// DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new workout"})
})

// PATCH a new workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH a new workout"})
})



export default router;