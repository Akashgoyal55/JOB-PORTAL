import mongoose from "mongoose";
import validator from 'validator'

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Name is Required']
    },
    lastName:{
        type: String,
    },
    email: {
        type: String,
        require: [true, 'Email is Required '],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    location:{
        type:String,
        default: 'United States'
    },

},
{ timestamps : true}
);

export default mongoose.model("User", userSchema)