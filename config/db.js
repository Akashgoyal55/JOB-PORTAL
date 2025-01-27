// import mongoose from "mongoose";
// import colors from "colors";

// const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URL);
//         console.log('Connected to Mongodb Database ${mongoose.connection.host}'.bgMagenta.white);
//     } catch (error) {
//         console.log('MongoDB Error ${error}'.bgRed.white);
//     }
// };

// export default connectDB;

import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected to MongoDB Database: ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(
            `MongoDB Connection Error: ${error.message}`.bgRed.white
        );
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
