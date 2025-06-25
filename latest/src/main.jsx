import '../sass/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DashboardHeader } from './Header'
import { Dashboard } from './Dashboard'
import { Menu } from './Menu'
import { TabProvider } from './TabContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TabProvider>
    <Menu/>
    <DashboardHeader/>
    <Dashboard/>
   </TabProvider>
  </StrictMode>
)
