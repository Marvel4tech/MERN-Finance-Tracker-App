import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./config/dbConnect.js"
import financialRecordRouter from "./routes/financial-records.js"

dotenv.config()
dbConnect()

const app = express()

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
}
app.use(cors())
app.use(express.json({ limit: "100mb" }))

// Routes
app.use("/financial-records", financialRecordRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})