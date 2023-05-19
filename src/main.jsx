import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>{/* Para habilitar o uso de contexto, deve-se envolver o componente App com os componentes AuthContextProvider */}
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
