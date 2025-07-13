import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import Settings from "./Components/Settings"
import Users from "./Components/Users"
import Dashboard from "./Components/Dashboard"
import { GlobalProvider } from "./Context/GlobalContext"
import { GoogleOAuthProvider } from "@react-oauth/google"
import Analytics from "./Components/Analytics"

function App() {
  return (
    <Router>
     
      <div className="flex h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 ">
      <SideBar/>
        
        <div className="flex-1 p-4 md:p-6 dark:bg-gray-700 overflow-auto">
          <NavBar/>
          <Routes>
            <Route path="/" element = {<Dashboard/>}/>
            <Route path="/analytics" element = {<Analytics/>}/>
            <Route path="/settings" element = {<Settings/>}/>
            <Route path="/users" element = {<Users/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App
