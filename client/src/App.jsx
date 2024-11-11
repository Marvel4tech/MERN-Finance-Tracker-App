import { Routes, Route } from "react-router-dom"
import { Auth } from "./pages/auth"
import { Dashboard } from "./pages/dashboard"

function App() {

  return (
      <div>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/auth" element={<Auth />}/>
          </Routes>
      </div>
  )
}

export default App
