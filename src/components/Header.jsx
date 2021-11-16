import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

// styles
import '../styles/components/Header.css';

const Header = () => {
        const { state: {cart} } = useContext(AppContext);


        return (
                <div className='Header'>
                        <h1 className='header-title'>
                                <Link to='/'>
                                GraftSoth Store
                                 </Link>
                         </h1>
                        <div className='header-checkout'>
                                <Link to='/checkout'>
                                <i className='fas fa-shopping-basket'>  Pay</i>
                                </Link>
                        </div>
                        {cart.length > 0 && <div className = 'Header-alert'><i className="fas fa-cart-plus"></i> {cart.length}</div>} 
                </div>
        )
}

export default Header;
