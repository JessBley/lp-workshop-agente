import React from 'react'
import ReactDOM from 'react-dom/client'
import ThankYouPage from './components/layout/ThankYouPage'

// Estilos base compartilhados
import './styles/fonts.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/base.css'
import './styles/utilities.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/campaign.css'
import './styles/thank-you.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThankYouPage />
  </React.StrictMode>,
)
