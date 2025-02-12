import { Product } from "../../app/model/product"
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material"

type Props = {
    product: Product
}

const ProductCard = ({product} : Props) => {
  return (
    <Card
        elevation={3}
        sx={{ width: 280,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
    >
        <CardMedia 
            sx={{ height:240, backgroundSize:'cover' }}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography
                gutterBottom
                sx={{ textTransform: 'uppercase' }}
                variant="subtitle2">
                    {product.name}
            </Typography>

            <Typography
                variant="h6"
                sx={{ color:'secondary.main' }}
            >
                ${( product.price / 100).toFixed(2)}
            </Typography>
        </CardContent>
        <CardActions
            sx={{ justifyContent: 'space-between' }}
        >
            <Button>Add to Cart</Button>
            <Button>View</Button>
        </CardActions>

    </Card>
  )
}

export default ProductCard