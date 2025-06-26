import '../sass/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DashboardHeader } from './Header'
import { Dashboard } from './Dashboard'
import { Menu } from './Menu'
import { TabProvider } from './TabContext'
import { SearchProvider } from './useSearch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TabProvider>
    <Menu/>
    <SearchProvider>
      <DashboardHeader/>
      <Dashboard/>
    </SearchProvider>
   </TabProvider>
  </StrictMode>
)
