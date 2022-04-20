import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (cat,filters,sort) => {
    console.log(cat,)
  const [products, setProducts] = useState([]);
  console.table(products)
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(
          cat 
        ? `http://localhost:5000/api/product?category=${cat.cat}`
        : `http://localhost:5000/api/product`);
        // console.log(res.data)
       setProducts(res.data);

      }catch(err){
      }
    };

    getProducts();
  },[cat])
  useEffect(() =>{
    cat.cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value])=>
      item[key].includes(value)
      
      ))
    );

  },[products,cat,filters])

// console.log(filteredProducts)

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
      // {popularProducts.map((item) => (
      //   <Product item={item} key={item.id} />
      // ))}

  );
};

export default Products;