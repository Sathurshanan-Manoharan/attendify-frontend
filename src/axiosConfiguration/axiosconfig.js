import axios from 'axios';


const Backend = axios.create({
    baseURL:'http://127.0.0.1:3000',
    headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      }
    
})

export default Backend;