import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import RemProvider from './context/rem.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemProvider>
      <App />
    </RemProvider>
  </StrictMode>,
)
