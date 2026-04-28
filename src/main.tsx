import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { BrowserRouter } from 'react-router'
import { TooltipProvider } from './components/ui/tooltip'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster position='top-right' />
        <App />
      </BrowserRouter>
    </TooltipProvider>
  </StrictMode>,
)
