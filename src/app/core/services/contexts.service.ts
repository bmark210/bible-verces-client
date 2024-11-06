import { ContextBody } from "../interfaces";
// import axiosInstance from "../axios";
import axios from 'axios';

export async function getContexts() {
  try {
    const response = await axios.get(`http://localhost:3000/api/contexts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contexts:", error);
    return [];
  }
}

export async function createContext(contextBody: ContextBody) {
  return await axios.post(`http://localhost:3000/api/contexts`, contextBody);
}
