import React, { useRef, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
        const {state:{cart}, addToBuyer} = useContext(AppContext)
        const form = useRef(null)
        const history = useHistory()

        const handleSubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(form.current);
                const buyer = {
                        name: formData.get('name'),
                        lastname: formData.get('lastname'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        address: formData.get('address'),
                        city: formData.get('city'),
                        apto: formData.get('apto'),
                        country: formData.get('country'),
                        cp: formData.get('cp'),
                }
                addToBuyer(buyer)
                history.push('/payments')
        }
        return (
               <div className="Information">
                       <div className="Information-content">
                               <div className="information-head">
                                       <h2>Informacion de contacto: </h2>
                               </div>
                               <div className="Information-form">
                                       <form ref = {form}>
                                               <input type="text" className="form-control" name='name'placeholder='Nombre completo'/>
                                               <input type="text" className="form-control" name='gmail'placeholder='Gmail'/>
                                               <input type="text" className="form-control" name='apto' placeholder='Apartamento' />
                                               <input type="text" className="form-control" name='pais' placeholder='Pais'/>
                                               <input type="text" className="form-control" name='estado' placeholder='State'/>
                                               <input type="text" className="form-control" name='city' placeholder='City'/>
                                               <input type="text" className="form-control" name='address' placeholder='address'/>
                                               <input type="text" className="form-control" name='cp' placeholder='Codigo Postal'/>
                                               <input type="text" className="form-control" name='phone' placeholder='phone'/>
                                        </form>
                               </div>
                               <div className="Information-buttons">
                                       <div className="Information-back"> 
                                          <Link to="/checkout"> 
                                            Regresar
                                          </Link>
                                       </div>
                                       <div className="Information-next">
                                        <button type="button" className="btn-pay" onClick={handleSubmit}>
                                                Pagar
                                        </button>
                                       </div>
                               </div>
                       </div>
                       <div className="Information-sideback">
                               <h3>Pedido: </h3>
                               {cart.map(item => (
                                 <div className="Information-item" key={item.cartId}>
                                        <div className="Information-element">
                                             <h4>{item.title}</h4>
                                             <span> Lps {item.price}</span>
                                        </div>
                                </div>
                               ))}
                              
                       </div>
               </div>
        )
}

export default Information;