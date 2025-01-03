// // import axios from "axios";

// // const api = axios.create({
// //     baseURL: "http://http://127.0.0.1:8000/api",
// //     headers: {
// //         'content-Type':'application/json',
// //     }
// // });

// // export default api;
// const BASE_URL = 'http://127.0.0.1:8000/api/';

// const api = {
//     get: async (endpoint) => {
//         const response = await fetch(`${BASE_URL}${endpoint}`);
//         if (!response.ok) throw new Error('Failed to fetch data');
//         return response.json();
//     },
//     post: async (endpoint, data) => {
//         const response = await fetch(`${BASE_URL}${endpoint}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data),
//         });
//         if (!response.ok) throw new Error('Failed to post data');
//         return response.json();
//     },
//     put: async (endpoint, data) => {
//         const response = await fetch(`${BASE_URL}${endpoint}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data),
//         });
//         if (!response.ok) throw new Error('Failed to update data');
//         return response.json();
//     },
//     delete: async (endpoint) => {
//         const response = await fetch(`${BASE_URL}${endpoint}`, { method: 'DELETE' });
//         if (!response.ok) throw new Error('Failed to delete data');
//         return response.json();
//     },
// };

// export default api;
// services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Update this if your API endpoint is different
});

export default api;

