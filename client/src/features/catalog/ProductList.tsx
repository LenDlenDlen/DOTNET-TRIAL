// import React from 'react'
import { Box } from '@mui/material'
import { Product } from '../../app/model/product'
import ProductCard from './ProductCard'


type Props = {
  products: Product[]
}
const ProductList = ({products}: Props) => {
  return (
    <Box sx={{ display: 'flex', flexWrap:'wrap', gap: 3, justifyContent:'center'}}>
        {products.map(product => (
          <ProductCard product={product}/>
        ))}
    </Box>
  )
}

export default ProductList