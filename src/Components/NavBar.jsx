import React from 'react';


function NavBar() {
  return (
    
    <div className="bg-white text-gray-600 px-4 sm:px-6 py-4 flex justify-between items-center shadow-sm rounded-lg mb-4
                    dark:bg-gray-800 dark:text-gray-200">

      <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2 flex-1 max-w-xs md:max-w-md lg:max-w-lg dark:bg-gray-700">
        <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
        <input
          type="text"
          placeholder="Search task"
          className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 dark:text-gray-200 "
        />
        
      </div>


      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
          <i className="fas fa-bell text-xl"></i> 
        </button>
        <button className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
          <i className="fas fa-envelope text-xl ml-3"></i>
        </button>

        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-user-tie text-xl ml-3"></i>
          <div className="hidden md:flex items-center flex-col"> {/* Hide on small screens if desired */}
            <p className="text-gray-800 dark:text-gray-400 font-semibold text-sm">Nitin Baluni</p>
            <p className="text-gray-500 text-xs ">baluninitin06@gmail.com</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;