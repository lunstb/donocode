import React from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { CssBaseline } from '@material-ui/core'
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default App