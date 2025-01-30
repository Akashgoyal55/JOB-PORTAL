// import express from 'express'
// import { registerController } from '../controllers/authController.js';

// //router object
// const router = express.Router()

// //routes
// router.post('/register', )

// export default router

import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

// Router object
const router = express.Router();

// Routes

// LOGIN || POPST
router.post('/register', registerController);

// LOGIN || POST
router.post('./login', loginController)

export default router;