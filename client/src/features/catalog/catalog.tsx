import { useEffect, useState } from "react";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";


const Catalog = () => {
  const [products, setProduct] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch("https://localhost:5001/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;

