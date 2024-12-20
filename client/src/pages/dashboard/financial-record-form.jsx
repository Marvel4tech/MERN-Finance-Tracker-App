import { useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { useFinancialRecord } from "../../contexts/financial-record-context"

export const FinancialRecordForm = () => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")

    // context
    const { addRecord } = useFinancialRecord()

    const {user} = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecord = {
            userId: user?.id,
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMethod: paymentMethod,
        }

        addRecord(newRecord)
        setDescription("")
        setAmount("")
        setCategory("")
        setPaymentMethod("")
    }

    return (
        <div className=" w-full">
            <form onSubmit={handleSubmit} className=" space-y-3">
                <div className=" flex flex-col gap-[2px]">
                    <label className=" font-semibold text-sm">Description:</label>
                    <input 
                        type="text" 
                        required 
                        label='Description' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className=" py-1 px-3 border border-gray-700 rounded-sm"
                    />
                </div>
                <div className=" flex flex-col gap-[2px]">
                    <label className=" font-semibold text-sm">Amount:</label>
                    <input 
                        type="number" 
                        required 
                        label='Amount' 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                        className=" py-1 px-3 border border-gray-700 rounded-sm"
                    />
                </div>
                <div className=" flex flex-col gap-[2px]">
                    <label className=" font-semibold text-sm">Category:</label>
                    <select required value={category} onChange={(e) => setCategory(e.target.value)} className=" py-2 px-3 border
                    border-gray-700 rounded-sm text-sm text-blue-600">
                        <option value="">Select a Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className=" flex flex-col gap-[2px]">
                    <label className=" font-semibold text-sm">Payment Method:</label>
                    <select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className=" py-2 px-3 border
                    border-gray-700 rounded-sm text-sm text-blue-600">
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Bank">Bank</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className=" bg-blue-600 py-1 px-4 rounded-sm text-white">
                    Add Record
                </button>
            </form>
        </div>
    )
}