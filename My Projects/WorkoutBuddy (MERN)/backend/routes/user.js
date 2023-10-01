import express from 'express';

// controller functions
import { loginUser, signupUser } from '../controllers/userController.js';

const router = express.Router()

// login route 
router.post("/login", loginUser)

// sign up route
router.post("/signup", signupUser)

export default router;