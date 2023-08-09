import { useEffect, useState } from 'react';
import Product from '../component/product';


function Productlist(){
    const api_url= "https://fakestoreapi.com/products";
    const [products, setProducts]= useState([]);
    const [categories,setCategories] = useState([]);
    const getproduct=()=>{
        fetch(api_url)
        .then((response)=>response.json())
        .then((data)=>setProducts(data));
    }
    const getcategory=()=>{
        fetch(`${api_url}/categories`)
        .then((response)=>response.json())
        .then((data)=>setCategories(data));
    }
    const getCategoryName=(catName)=>{
        fetch(`${api_url}/category/${catName}`)
        .then((response)=>response.json())
        .then((data)=>setProducts(data));
    }

    useEffect(()=>{
        getproduct();
        getcategory();

    },[]);

    return(
        <>
        <div className="ProductList">
            <div className="container">
                <div className="row">
                <div className="col-12">
                <h2>Product List</h2>
                </div>
                </div>
                <div className='row'>
                    <div className='col-7'>
                    <button className='btn btn-info pad' onClick={()=>{
                        getproduct();
                    }} > All </button>
                        { categories.map((cat)=> {
                    return <button key={cat} className='btn btn-info pad' onClick={()=>{
                        getCategoryName(cat);
                    }} >{cat}</button>
                })
                        }
                    </div>
                </div>

                <div className="row">
                {products.map((product)=>{
                    return(<div className="col-3" key={product.id}>
                <Product product={product} showButton={true}/>
                </div>
                ) ;
                })}

                </div>
            </div>
        </div>

        </>
    );
}
export default Productlist;