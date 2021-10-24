import { useState, useEffect } from "react";
import Spiner from '../../spiner/spiner';
function Product({match}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductDetails();
    })
    const getProductDetails = () => {
        return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }
    return (
        <>
          {
            product ?
            (
                <div className="container">
                    <div className="row mt-5 bg-light text-dark py-3">
                        <div className="col-4">
                            <div className="w-50 m-auto">
                                <img src={product.image} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-6 offset-1 text-start">
                            <h4>{product.title}</h4>
                            <h5 className="text-capitalize">{product.category}</h5>
                            <p className="fs-3">{product.price} EGP</p>
                            <p className="fs-3 text-warning">Rating: { product.rating.rate}</p>
                            <p>{product.description}</p> 
                            
                        </div>
                    </div>
                </div>
            )  
            : (
                <Spiner/>
            )    
        }
          </>   
    )
}
export default Product;
// className="d-flex justify-content-start align-items-center flex-wrap mt-5"