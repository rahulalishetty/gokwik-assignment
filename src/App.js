import Header from './components/Header/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{height: '100%'}}>
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
