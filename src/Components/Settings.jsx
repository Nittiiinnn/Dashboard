import ThemeToggle from "../Context/ThemeToggle"
import { GlobalContext } from "../Context/GlobalContext"
function Settings() {
    
   
    return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-800 dark:text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Settings</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700"> 
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Theme Preference</h3>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Settings