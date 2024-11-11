import mongoose from "mongoose";

const financialRecordSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    paymentMethod: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})

const FinancialRecordModel = mongoose.model("FinancialRecord", financialRecordSchema);
export default FinancialRecordModel;