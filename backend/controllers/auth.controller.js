import User from "../models/auth.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jsonWebToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        
        const user = await User.findOne({ email })

        if(user){
            return res.status(401).json({ error: "User already exists!"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        })

        if(newUser){
            generateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
            })
        } else {
            res.status(401).json({ error: "Invalid user data!"})
        }
    } catch (error) {
        console.log("Error while signing up", error.message)
        return res.status(500).json({ error: "Internal Server Error! "})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(401).json({ error: "Invalid credentials!"})
        }

        generateToken(user._id, res)

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        })
    } catch (error) {
        console.log("Error while signing up", error.message)
        return res.status(500).json({ error: "Internal Server Error! "})
    }
}

export const logout = async (res) => {
    try {
        res.clearCookie("jwt")
        res.status(200).json({ message: "Logout successful!"})
    } catch (error) {
        console.log("Error while signing up", error.message)
        return res.status(500).json({ error: "Internal Server Error! "})
    }
}