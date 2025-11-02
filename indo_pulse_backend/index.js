import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database connected successfully!")
})
.catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000!")
})