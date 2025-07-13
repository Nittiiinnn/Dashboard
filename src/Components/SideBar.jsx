
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <button
        className="md:hidden focus:outline-none z-50 p-0 absolute top-4 left-4" 
        onClick={() => setIsOpen(!isOpen)}
      >

        <svg
          className="w-6 h-6 p-1 text-gray-800 dark:text-gray-200" 
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}


      <div
        className={`
          fixed z-50 top-0 left-0 h-full w-64 
          bg-white dark:bg-gray-900 dark:text-gray-200 text-gray-600
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 

          
          md:relative md:translate-x-0 md:block md:w-60 md:h-screen md:shadow-none 
          p-5 space-y-6 shadow-sm 
        `}
      >

        <div className="flex justify-between items-center md:hidden mb-6"> 
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Nitin Balunix
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6"> 
          Nitin Baluni
        </h1>

        <nav className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-2 rounded-lg transition-colors duration-200 ease-in-out ${
                isActive
                  ? 'bg-white text-[#4ACAF5] dark:text-gray-800 shadow-sm'
                  : 'hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-800'
              }`
            }
            onClick={() => setIsOpen(false)} 
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `block p-2 rounded-lg transition-colors duration-200 ease-in-out ${
                isActive
                  ? 'bg-white text-[#4ACAF5] dark:text-gray-800 shadow-sm'
                  : 'hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-800'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            📊 Analytics
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block p-2 rounded-lg transition-colors duration-200 ease-in-out ${
                isActive
                  ? 'bg-white text-[#4ACAF5] dark:text-gray-800 shadow-sm'
                  : 'hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-800'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            ⚙️ Settings
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block p-2 rounded-lg transition-colors duration-200 ease-in-out ${
                isActive
                  ? 'bg-white text-[#4ACAF5] dark:text-gray-800 shadow-sm'
                  : 'hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-800'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            👤 About Me
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default SideBar;