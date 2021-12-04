import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

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
    };
    addToBuyer(buyer);
    history.push('/payments');
  };

  const valid_data = () => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="information-head">
          <h2>Informacion de contacto: </h2>
        </div>
        <div className="Information-form">
          <form class="row g-3 needs-validation" ref={form}>
                <div className="col-md-6">
                        <label for='name' className ='form-label'>Name:</label>
                        <input type='text' className='form-control' id='name' name='name' required/>
                        <div className="valid-feedback">you must insert a name</div>
                </div>
                <div className="col-md-6">
                        <label for='gmail' className ='form-label'>Gmail:</label>
                        <input type='text' className='form-control' id='gmail' name='gmail' required/>
                        <div className="valid-feedback">you must insert a gmail</div>
                </div>
                <div className="col-md-6">
                        <label for='apartment' className ='form-label'>Apartment:</label>
                        <input type='text' className='form-control' id='apartment' name='apartment' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='country' className ='form-label'>Country:</label>
                        <input type='text' className='form-control' id='country' name='country' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='state' className ='form-label'>State:</label>
                        <input type='text' className='form-control' id='state' name='state' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='city' className ='form-label'>City:</label>
                        <input type='text' className='form-control' id='city' name='city' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='address' className ='form-label'>Address:</label>
                        <input type='text' className='form-control' id='address' name='address' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='postal-code' className ='form-label'>Postal-code:</label>
                        <input type='text' className='form-control' id='postal-code' name='postal-code' required/>
                        <div className="valid-feedback">you must insert your direction</div>
                </div>
                <div className="col-md-6">
                        <label for='phone' className ='form-label'>Phone:</label>
                        <input type='text' className='form-control' id='phone' name='phone' required/>
                        <div className="valid-feedback">you must insert your phone number</div>
                </div>
                <div class="col-8">
                         <input 
                         class="form-check-input" type="checkbox"
                          value="feedback" id="invalidCheck" required/>
                          <label class="form-check-label" for="invalidCheck">
                          did you enjoy your shopping?
                         </label>
                          <div class="invalid-feedback">
                                        please give us your phone number
                         </div>
                </div>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
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
        {cart.map((item) => (
          <div className="Information-item" key={item.cartId}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span> Lps {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
