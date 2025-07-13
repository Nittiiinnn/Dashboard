
import { createContext, useState, useEffect} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme")||"light";
  });


  useEffect(()=>{
    localStorage.setItem("theme",theme);
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
},[theme]);
console.log("current theme: ", theme);

  const toggleTheme = () => 
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
