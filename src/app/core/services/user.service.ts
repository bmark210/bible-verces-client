import axios from "axios";

const baseUrl =
  typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.host}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

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
