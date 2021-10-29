import axios from 'axios';

export const getAllItemsApi = axios.create({
  baseURL: '/api/getallitems',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
})

