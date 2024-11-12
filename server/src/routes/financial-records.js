import { Router } from "express";
import FinancialRecordModel from "../models/financialRecordModel.js"

const router = Router()

router.get("/getAllByUserID/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId: userId })
        if (records.length === 0) {
            return res.status(404).json({ message: "No records found for the user."})
        }
        res.status(200).json(records)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const newRecordBody = req.body
        const newRecord = new FinancialRecordModel(newRecordBody)
        const savedRecord = newRecord.save()

        res.status(200).json(savedRecord)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put("/id", async (req, res) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body
        const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true })

        if (!record) return res.status(404).send()
        res.status(200).json(record)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await FinancialRecordModel.findByIdAndDelete(id)
        if (!record) return res.status(404).send()
        res.status(200).json(record)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router;