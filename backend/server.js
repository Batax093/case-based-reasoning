import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import connectDB from "./config/connectDB.js"

import authRoutes from "./routes/auth.routes.js"
import diabetesRoutes from "./routes/diabetes.routes.js"

const app = express()

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/data", diabetesRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    connectDB(),
    console.log(`Server is running on port ${PORT}`)})