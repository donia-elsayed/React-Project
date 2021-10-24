import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import './shop.css'
function Shop() {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, [])
    const getAllProducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }
    return (
        <>
        {
            products ? (
            <div className="container">
                <div className="d-flex flex-wrap my-5 justify-content-evenly">
                    {products.map(products => {
                        return (
                            <Link to={`/shop/${products.id}`} key={products.id} className="w-25 p-3 text-center border my-3 text-decoration-none me-1">
                                <div className="product__img m-auto mb-2">
                                    <img src={products.image} alt=""/>
                                </div>
                                <div className="product__content">
                                    <h4>{products.title}</h4>
                                    <p className="fs-3">{products.price} EGP</p>
                                    <h5 className="fs-3">Rating: {products.rating.rate}</h5>
                                </div>
                            </Link>
                        )
                    })}
                </div> 
            </div>
            )
            :
            (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            )
        }
        </>
        )
}
export default Shop;
