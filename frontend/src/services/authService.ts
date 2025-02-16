import API from "./apiService.ts";

export const login = async (email: string, password: string) => {
  const response = await API.post("/users/login", { email, password });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await API.post("/users/register", { name, email, password });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};
