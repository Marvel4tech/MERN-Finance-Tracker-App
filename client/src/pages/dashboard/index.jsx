import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form"
import { FinancialRecordList } from "./financial-record-list"

export const Dashboard = () => {
    const { user } = useUser()

    return (
        <div className=" h-screen max-w-6xl mx-auto flex flex-col items-center justify-center">
            <h1 className=" text-3xl font-semibold mb-5">Welcome {user?.firstName}! Here Are Your Finances:</h1>
            <FinancialRecordForm />
            <FinancialRecordList />
        </div>
    )
}