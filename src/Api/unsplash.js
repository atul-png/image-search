import axios from 'axios';




export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID exM4QPNkDZWc7x4erROqPwS0SmLq3xb-ydy_rceGKiA'
       }
    
});