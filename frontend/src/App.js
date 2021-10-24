
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import Router from './Router';

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