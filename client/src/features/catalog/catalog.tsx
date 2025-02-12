// import React from 'react'
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";

type Props ={
    products:Product[];
}

function catalog({products}: Props) {
  return (
    <>
      <ProductList products={products}/>
    </>
  );
}

export default catalog;
