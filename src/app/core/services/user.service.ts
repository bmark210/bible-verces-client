import axios from "axios";

const baseUrl = location.protocol + "//" + location.host;

export async function getUsers() {
  const response = await axios.get(`${baseUrl}/api/users`);
  return response.data;
}

export async function createUser(name: string, email: string) {
  return await axios.post(`${baseUrl}/api/users`, {
    name,
    email,
  });
}
