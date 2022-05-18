import logo from './logo.svg';
import { createTheme, colors } from '@mui/material'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import { ThemeProvider } from '@emotion/react';
import About from './components/Pages/About';

function App() {
  const theme = createTheme({
    palette: {
       secondary: {
        main: colors.orange[500]
       },
       section : {
          colors : 'red'
       }
    }
});
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
   <Navbar />
   <Home />
   <About />

    </div>
    </ThemeProvider>
  );
}

export default App;
