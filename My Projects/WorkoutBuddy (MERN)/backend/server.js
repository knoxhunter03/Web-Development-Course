import express from "express";
import 'dotenv/config';
import workoutRoutes from "./routes/workouts.js";
import mongoose from "mongoose";

//express app
const app = express();

// port number: process.env.PORT

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT);
        })
    }) 
    .catch((error) => {
        console.log(error);
    })

// Note: We also created a script in package.json.
// Check the "dev" : "nodemon server.js"
// To run it we just type "npm run dev" command in the terminal

