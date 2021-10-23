
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