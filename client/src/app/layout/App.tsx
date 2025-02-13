import { useState } from "react";
import './App.css'
// import { Product } from "../model/product";
import Navbar from "../layout/Navbar";
import {
  Container,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
// import Catalog from "../../features/catalog/catalog";



function App() {  
  const [darkmode, setDarkMode] = useState(false);
  const palleteType = darkmode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? 
        "#eaeaea" : "#121212",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{ 
        minHeight: '100%',
        minWidth: '100%',
        background: darkmode 
        ?"radial-gradient(circle, #1e3aBa, #111B27)" : 
        "radial-gradient(circle, #baecf9, #f0f9ff)",
       }}>
        <Container  sx={{ mt: 8 }} maxWidth='xl'>
          <Outlet />
        </Container>
      </Box> 

    </ThemeProvider>
  );
}

export default App;
