import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalProvider } from './Context/GlobalContext.jsx'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </AuthProvider> 
  </StrictMode>,  
   
    
)