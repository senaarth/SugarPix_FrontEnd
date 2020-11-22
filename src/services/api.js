import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sugarpix.herokuapp.com/',
});

export default api;
