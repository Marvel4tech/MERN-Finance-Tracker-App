import { useState } from "react"
import { useUser } from "@clerk/clerk-react"

export const FinancialRecordForm = () => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")

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

        // addRecord(newRecord)
        setDescription("")
        setAmount("")
        setCategory("")
        setPaymentMethod("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input 
                        type="text" 
                        required 
                        label='Description' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className=" border"
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input 
                        type="number" 
                        required 
                        label='Amount' 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                        className=" border"
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select required value={category} onChange={(e) => setCategory(e.target.value)} className=" border">
                        <option value="">Select a Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Payment Method:</label>
                    <select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className=" border">
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Bank">Bank</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className=" bg-green-600 py-2 px-4 rounded-md text-white">
                    Add Record
                </button>
            </form>
        </div>
    )
}