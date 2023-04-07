import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import theme from './theme'
interface IAppThemeProps{
    children: ReactNode;
}
export const AppTheme = ({children}:IAppThemeProps):JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
