import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

const FinancialRecordContext = createContext()

export const useFinancialRecord = () => useContext(FinancialRecordContext)

export const FinancialRecordProvider = ({ children }) => {
    const [records, setRecords] = useState([])
    const { user } = useUser()

    const fetchRecords = async () => {
        if(!user) return
        const response = await fetch(`http://localhost:3000/financial-records/getAllByUserID/${user.id}`)

        if (response.ok) {
            const records = await response.json();
            console.log(records)
            setRecords(records);
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [user])

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