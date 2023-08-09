import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Product from "./product";


function Productdetils(){
    const params = useParams();
    const api_url= "https://fakestoreapi.com/products";
    const [ product,setProduct ] = useState([]);

    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((response)=>response.json())
        .then((product)=> setProduct(product))
    },[])

    return (
        <>
            <h1>Product Details  </h1>
            <Product product={product} showButton={false}/>

        </>

    );
}
export default Productdetils;