import { Routes, Route } from "react-router-dom"
import { Auth } from "./pages/auth"
import { Dashboard } from "./pages/dashboard"
import { FinancialRecordProvider } from "./contexts/financial-record-context"

function App() {

  return (
      <div>
          <Routes>
            <Route path="/" element={<FinancialRecordProvider> <Dashboard /> </FinancialRecordProvider>}/>
            <Route path="/auth" element={<Auth />}/>
          </Routes>
      </div>
  )
}

export default App
