import React from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

const App = () => {
  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default App