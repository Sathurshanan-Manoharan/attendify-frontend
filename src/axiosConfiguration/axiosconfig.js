import axios from 'axios';


const Backend = axios.create({
    baseURL:'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      }
    
})

export default Backend;