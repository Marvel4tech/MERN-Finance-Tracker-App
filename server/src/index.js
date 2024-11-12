import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/dbConnect.js"
import financialRecordRouter from "./routes/financial-records.js"

dotenv.config()
dbConnect()

const app = express()

app.use(express.json({ limit: "100mb" }))

// Routes
app.use("/financial-records", financialRecordRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})