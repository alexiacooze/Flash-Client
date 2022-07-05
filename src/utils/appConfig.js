import axios from "axios";

const API_URL = "http://localhost:8080/";

export const CATEGORIES_API = {
  getAll: (endpoint) => {
    return axios.get(`${API_URL}${endpoint}`);
  },

  getOne: (endpoint, id) => {
    return axios.get(`${API_URL}${endpoint}/${id}`);
  },
};
