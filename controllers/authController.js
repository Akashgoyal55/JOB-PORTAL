import userModel from "../models/userModel.js"

export const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body
        //validate
        if(!name){
            return res.status(400).send({success: false, message: 'Enter your name'})
        }
        if(!email){
            return res.status(400).send({success: false, message: 'Enter your email'})
        }
        if(!password){
            return res.status(400).send({success: false, message: 'Enter your password '})
        }
        const exisitingUser = await userModel.findOne({email})
        if(exisitingUser){
            return res.status(200).send({
                success: false,
                message: 'Email Already Registered, Please Login'
            })
        }
        const user = await userModel.create({name, email, password})
        res.status(201).send({
            success: true,
            message: 'User Created Successfully',
            user
        })


    } catch (error) {
        console.log(error)
        res.status(400).send ({
            message: 'Error In the Register Constroller',
            success: false,
            error
        })
    }

}