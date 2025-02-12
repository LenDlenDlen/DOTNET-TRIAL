import { useEffect, useState } from "react";
// import './App.css'
import { Product } from "../model/product";
import Catalog from "../../features/catalog/catalog";
import Navbar from "../layout/Navbar";
import {
  Container,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
// import { palette } from '@mui/icons-material';



function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const addProduct = () => {
    setProduct((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * (Math.random() * 100),
        quantityInStock: 100,
        description: "test",
        pictureUrl: "https://picsum.photo/200",
        type: "test",
        brand: "test",
      },
    ]);
  };

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
        minHeight: '100vh',
        minWidth: '100vw',
        background: darkmode 
        ?"radial-gradient(circle, #1e3aBa, #111B27)" : 
        "radial-gradient(circle, #baecf9, #f0f9ff)",
       }}>
        <Container>
          <Box display="flex" justifyContent="center" gap={3} marginY={3}>
            <Button variant="contained" onClick={addProduct}>
              Add product
            </Button>
          </Box>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
