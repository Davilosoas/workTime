import API from "./apiService.ts";

export const addActivity = async (
  name: string,
  startTime: string,
  endTime: string
) => {
  try {
    const response = await API.post("/activities", {
      name,
      startTime,
      endTime,
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao adicionar atividade:", error.response);
    throw error;
  }
};

export const getActivities = async () => {
  try {
    const response = await API.get("/activities");
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao buscar atividades:", error.response);
    throw error;
  }
};

export const getReport = async () => {
  try {
    const response = await API.get("/activities/report");
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao obter relatório:", error.response);
    throw error;
  }
};

export const deleteActivity = async (id: number) => {
  try {
    const response = await API.delete(`/activities/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("❌ Erro ao deletar atividade:", error.response);
    throw error;
  }
};
