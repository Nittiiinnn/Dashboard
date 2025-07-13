import React from 'react'
import { GlobalContext } from './GlobalContext'
import { useContext } from 'react'
const ThemeToggle=()=> {
    
    const {theme,toggleTheme} = useContext(GlobalContext);
    console.log(theme);

    return (
        <>
            <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
                {theme==="light"?"🌙 Dark Mode":"☀️ Light Mode"}
            </button>
        </>
  );

};
export default ThemeToggle;