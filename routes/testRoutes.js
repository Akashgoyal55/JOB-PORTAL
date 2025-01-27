// import express from "express";
// import { testPostController } from "../controllers/testController.js";

// //router object
// const router = express.Router()

// //routes
// router.post('/test-post', testPostController)

// //export
// export default router;

import express from 'express';
import { registerController } from '../controllers/authController.js';

const router = express.Router();

// Register Route
router.post('/register', registerController);

export default router;
