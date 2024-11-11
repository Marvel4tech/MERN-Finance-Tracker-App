export const FinancialRecordForm = () => {

    return (
        <div>
            <form>
                <div>
                    <label>Description:</label>
                    <input type="text" required label='Description' />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" required label='Amount' />
                </div>
                <div>
                    <label>Category:</label>
                    <select required>
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
                    <select required>
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Bank">Bank</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit">
                    Add Record
                </button>
            </form>
        </div>
    )
}