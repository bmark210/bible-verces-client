import { ContextBody } from "../interfaces";
import axiosInstance from "../axios";

export async function getContexts() {
  try {
    const response = await axiosInstance.get(`/api/contexts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contexts:", error);
    return [];
  }
}

export async function createContext(contextBody: ContextBody) {
  return await axiosInstance.post(`/api/contexts`, contextBody);
}
