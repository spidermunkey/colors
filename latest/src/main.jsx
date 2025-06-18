import '../sass/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DashboardHeader } from './Header'
import { Dashboard } from './Dashboard'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardHeader/>
    <Dashboard/>
  </StrictMode>
)
