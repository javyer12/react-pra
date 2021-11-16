import React, { useContext} from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css'

const Successes = () => {
        const { state: {buyer}} = useContext(AppContext);
        console.log(buyer[1].address)
        const location = useGoogleAddress(buyer.address);
        return (
              <div className="Success">
                      <div className="Success-content">
                              <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                              <span>Tu pedido llegara en tres dias a tu direccion: </span>
                              <div className="Success-map">
                                     <Map data={location}/> 
                              </div>
                      </div>
              </div>
        )
}

export default Successes;