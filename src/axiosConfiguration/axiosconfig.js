import axios from 'axios';


const Backend = axios.create({
    baseURL:'https://attendify-backend-i3rpgzeqlq-uc.a.run.app',
    headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      }
    
})

export default Backend;
