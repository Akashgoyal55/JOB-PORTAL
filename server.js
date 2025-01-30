//package import
import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

//files import
import connectDB from './config/db.js';
//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 
import errorMiddleware from './middelwares/errorMiddleware.js';


// Dotenv Config
dotenv.config();

//mongodb connection
connectDB()

// Rest object
const app = express();


//middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use("/api/v1/test" , testRoutes);
app.use("/api/v1/auth", authRoutes);


//validation middleware
app.use(errorMiddleware);

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Node server is running in ${process.env.DEV_MODE} mode on port number ${PORT}`);
});
