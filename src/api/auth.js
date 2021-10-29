import axios from 'axios';

export const signInApi = axios.create({
  baseURL: '/api/signup',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
})

export const signUpApi = axios.create({
  baseURL: '/api/signup',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
})
