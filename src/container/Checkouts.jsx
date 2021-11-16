import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css'

const Checkouts = () => {
        const {state: {cart}, removeFromCart} = useContext(AppContext);
       

        const handleRemove = (product) => () => {
                removeFromCart(product)
                console.log('se borro')
        }
      
        const handleSumTotal = () => {
                const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
                const sum = cart.reduce(reducer, 0);
                return sum;
        }
          console.log(cart)
        return (
                <div className="Checkout">
                    <div className="Checkout-content">
                        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}

                        {cart.map((item)=>(
                            <div  key={item.cartId} className="Checkout-item" >
                                 <div className="Checkout-element">
                                     <h4>{item.title}</h4> 
                                     <span>{item.price}</span>
                                 </div>
                                <button
                                     type="button" 
                                     className="btn btn-delete"
                                     onClick={handleRemove(item.cartId)} >
                                         <i className="fas fa-trash-alt" title='Eliminar'></i>
                                 </button>
                            </div>
                                   ))} 
                              
                             
                        </div>
                        {cart.length > 0 && (
                        <div className="Checkout-sidebar">
                                <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                                <Link to="/checkout/information">
                                <button type="button" className="btn-continue">Continuar Pedido</button>
                                </Link>
                        </div>
                        )}
                        
                </div>
        )
}

export default Checkouts;