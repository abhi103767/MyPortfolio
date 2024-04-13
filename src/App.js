import logo from './logo.svg';
import { createTheme, colors } from '@mui/material'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
const projects =
    [{
        image_url: 'http://3.95.179.169:7500/home',
        title: 'Groww',
        description: 'This is very good app to work with different',
        github: 'https://github.com/abhi103767',
        deployedlink: 'groww-project.herokuapp.com/home',
        techstack: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS']
    },
    {
        image_url: 'http://3.95.179.169:7500/home',
        title: 'Groww',
        description: 'This is very good app to work with different',
        github: 'https://github.com/abhi103767',
        deployedlink: 'groww-project.herokuapp.com/home',
        techstack: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS']
    }
    ]
    console.log(projects);

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
    <div className="App" style={
      { 'min-width': '500px'}
      }>
   <Navbar />
   <Home />
   <About />
   <Box display={'flex'}
            sx={
                {

                    width: {
                        md: '90%',
                        sm : '100vw',
                        xs: '100vw',
                    },
                    flexDirection: {
                        md: 'row',
                        xs: 'column'
                    },
                    justifyContent: {
                        md: 'center',   
                    },
                    alignItems: {
                   
                    },
                    height:{
                      sm : '800px'
                    }

                }
            }
            margin={'auto'}

            border={'1px solid red'}>
              {
                projects.map((project) => {
                  return (<Projects project={project} />)
                })
              }
            </Box>
            <Contact />
   

    </div>
    </ThemeProvider>
  );
}

export default App;
