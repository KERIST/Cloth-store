import axios from 'axios';

export const getAllItemsApi = axios.create({
  baseURL: '/api/items/all',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET',
})

