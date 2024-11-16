import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form"
import { FinancialRecordList } from "./financial-record-list"

export const Dashboard = () => {
    const { user } = useUser()

    return (
        <div className=" h-screen max-w-6xl mx-auto flex flex-col items-center px-10">
            <h1 className=" text-3xl font-bold mb-5 mt-5 text-blue-950">Welcome {user?.firstName}! Here Are Your Finances:</h1>
            <FinancialRecordForm />
            <FinancialRecordList />
        </div>
    )
}