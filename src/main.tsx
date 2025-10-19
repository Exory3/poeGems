import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './index.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
