import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import {CLIENTID} from '../utils/index';
import '../styles/components/Payment.css'


const Payments = ({history}) => {
        const {state: {cart, buyer}, addNewOrder} = useContext(AppContext);
        console.log(buyer)
        const paypalOptions = {
                clientId:'AeWbnz9EKwXXow8HKzwMBk18dHnVAGo8JPYMZ-_vSNLzCe0_rl1Y1aEnc5upMkcKxOQIDfX7kPoNC8rY',
                intent: 'capture',
                currency: 'USD'

        }
        const  buttonStyle = {
                layout: 'vertical',
                shape: 'rect'
        }
        const handleSumTotal = () => {
                const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
                const sum = cart.reduce(reducer, 0);
                return sum;
        }
        const handlePaymentSuccess = (data) => {
                console.log(data)
                if (data.status === 'COMPLETED') {
                        const newOrder = {
                                buyer,
                                products: cart,
                                payment: data
                        }
                        addNewOrder(newOrder)
                        history.push('/checkout/success')
                }
        }
        return (
                <div className="Payment">
                        <div className="Payment-content">
                                <h3>Resumen del Pago: </h3>
                                {cart.map(item => (
                                        <div className="Payment-item" key={item.cartId}>
                                           <div className="Payment-element">
                                             <h4>{item.title}</h4>
                                             <span> Lps {item.price}</span>
                                           </div>
                                        </div>
                                ))}
                             <div className="Payment-button">
                                <PayPalButton
                                        paypalOptions={paypalOptions}
                                        buttonStyle={buttonStyle}
                                        amount={handleSumTotal()}
                                        onPaymentStart={()=> console.log('star patyment')}
                                        onPaymentSuccess = {data =>  handlePaymentSuccess(data)}
                                        onPaymentError = {error => console.log(error)}
                                        onPaymentCancel = {(cancel) => console.log(cancel)}
                                        />
                             </div>
                        </div>
                </div>
        )
}

export default Payments;