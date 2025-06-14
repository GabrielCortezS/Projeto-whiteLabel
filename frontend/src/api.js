import axios from 'axios';

// Configuração básica do Axios
const api = axios.create({
    baseURL:  '/api/items', // com proxy já definido, isso resolve para http://localhost:5000/api/items
});

export default api;