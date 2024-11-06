import axiosInstance from "../axios";

export async function getUsers() {
  const response = await axiosInstance.get(`/api/users`);
  return response.data;
}

export async function createUser(name: string, email: string) {
  return await axiosInstance.post(`/api/users`, {
    name,
    email,
  });
}
