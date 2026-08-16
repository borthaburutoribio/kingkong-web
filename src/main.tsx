import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import logoUrl from './assets/logo.jpg'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/jpeg'
favicon.href = logoUrl
document.head.appendChild(favicon)

const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&display=swap'
document.head.appendChild(fontLink)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
