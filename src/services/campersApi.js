import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCampers = (params = {}) => {
  return api.get('/campers', { params });
};

export const fetchCamperById = (id) => {
  return api.get(`/campers/${id}`);
};
