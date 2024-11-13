import { createContext, useContext, useState } from "react";

const FinancialRecordContext = createContext()

export const useFinancialRecord = () => useContext(FinancialRecordContext)

export const FinancialRecordProvider = ({ children }) => {
    const [records, setRecords] = useState([])

    const addRecord = async (record) => {
        const response = await fetch("http://localhost:3000/financial-records", {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
                "Content-Type": "application/json",
            },
        })

        try {
            if (response.ok) {
                const newRecord = await response.json()
                setRecords((prev) => [prev, newRecord])
            }
        } catch (error) {
            
        }
    }

    return (
        <FinancialRecordContext.Provider value={{ records, addRecord }}>
            {children}
        </FinancialRecordContext.Provider>
    )
}