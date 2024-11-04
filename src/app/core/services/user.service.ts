import axios from "axios";

export async function getUsers() {
  const response = await axios.get('http://localhost:3000/api/users');
  return response.data;
}

export async function createUser(name: string, email: string) {
  return await axios.post("http://localhost:3000/api/users", {
    name,
    email,
  });
}
