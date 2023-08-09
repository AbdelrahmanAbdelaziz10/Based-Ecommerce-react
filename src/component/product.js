import { Link } from 'react-router-dom';
import { Params } from 'react-router-dom';

function Product(props){
  const {product , showButton}=props;

    return(
        <>
            <div className="card" >
                <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.category}</p>
    <p className="card-text">price : {product.price}</p>

    {showButton && (   
      <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>
)}
  </div>
</div>

        </>
    );
}
export default Product;