import {useState, useEffect} from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
  const [map, setMap] = useState(null);
  const API = `https://api.positionstack.com/output=json/forward?access_key=b7fc416218281f86c109d8bf173cfe7e&query=${address}`

  useEffect(async() => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
}, [])
return map;
}

export default useGoogleAddress;