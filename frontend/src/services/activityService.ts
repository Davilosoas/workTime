import axios from "axios";

const API_URL = "http://localhost:5000/api/activities";

export const addActivity = async (
  name: string,
  startTime: string,
  endTime: string
) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("❌ Nenhum token encontrado no localStorage!");
    return;
  }

  try {
    const response = await axios.post(
      API_URL,
      { name, startTime, endTime },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao adicionar atividade:", error.response);
    throw error;
  }
};

export const getActivities = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao buscar atividades:", error.response);
    throw error;
  }
};

export const getReport = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const response = await axios.get(`${API_URL}/report`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao obter relatório:", error.response);
    throw error;
  }
};

export const deleteActivity = async (id: number) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
