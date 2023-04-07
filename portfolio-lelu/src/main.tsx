import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { App } from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import { AppTheme } from './theme/AppTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </StrictMode>,
)
