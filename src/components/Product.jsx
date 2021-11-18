import React from 'react'
import '../styles/components/Products.css';


const Product = ({products, handleAddToCart  }) => {
       
        return (
                <div className="Products-item shadow float-md-start ">
                        <img className="Product-img" src={`http://localhost:1337${products.image[0].url}`} alt={products.title}/>
                        <div className="Products-item-info">
                                <h2>  {products.title}
                                  <span>
                                        {' '}
                                        <span>Lps  </span>
                                        {products.price}
                                  </span>
                                </h2>
                                <h4 className="fs-6"> {products.description}</h4>
                        </div>
                        <button type="button"  onClick={handleAddToCart(products)} id='buy-btn' className="btn-button ">Comprar</button>
                </div>
        )
}  

export default Product;


// rafce