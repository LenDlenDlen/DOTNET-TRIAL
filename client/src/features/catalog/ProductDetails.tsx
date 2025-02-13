import { useEffect, useState } from "react";
import { Product } from "../../app/model/product";
import { useParams } from "react-router-dom";
import {
  Button,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
// import { Label } from "@mui/icons-material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/product/${id}`)
      .then((Response) => Response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  const productDetails = [
    {Label:'Name', value: product?.name},
    {Label:'Description', value: product?.description},
    {Label:'Type', value: product?.type},
    {Label:'Brand', value: product?.brand},
    {Label:'Quantity in Stock', value: product?.quantityInStock},

  ]

  // placeholder lah
  if (!product) return <div>Data loading...</div>;

  return (
    <Grid2
      container
      spacing={6}
      maxWidth="lg"
      sx={{ mx: "auto", mt: 8 }}
      minHeight={"100vh"}
    >
      <Grid2 size={6}>
        <img
          src={product?.pictureUrl}
          style={{ width: "100%" }}
          alt={product.name}
        />
      </Grid2>

      <Grid2 size={6}>
        <Typography variant="h3"> {product.name} </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{ '& td': {fontSize: '1rem'} }}>
            <TableBody>
                {productDetails.map((detail, index) => (
              <TableRow key={index}>
                <TableCell sx={{fontWeight:'bold'}}>{detail.Label}</TableCell>
                <TableCell>{detail.value}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid2 container spacing={2} marginTop={3}>
          <Grid2 size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity"
              fullWidth
              defaultValue={1}
            />
          </Grid2>

          <Grid2 size={6}>
            <Button color="primary" size="large" variant="contained" fullWidth sx={{ height:'55px' }}>
              Add to Basket
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ProductDetails;
