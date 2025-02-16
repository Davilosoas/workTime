import Activity from "../models/Activity.js";

import Activity from "../models/Activity.js";

export const addActivity = async (req, res) => {
  try {
    const { name, startTime, endTime } = req.body;

    if (!name || !startTime || !endTime) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "Usuário não autenticado." });
    }

    const newActivity = await Activity.create({
      userId: req.user.userId,
      name,
      startTime,
      endTime,
    });

    res.status(201).json(newActivity);
  } catch (error) {
    console.error("❌ Erro ao criar atividade:", error);
    res.status(500).json({ message: "Erro ao criar atividade", error });
  }
};

export const getActivities = async (userId) => {
  return await Activity.findAll({
    where: { userId },
    order: [["startTime", "ASC"]],
  });
};

export const getReport = async (userId) => {
  const activities = await Activity.findAll({ where: { userId } });
  const report = {};

  activities.forEach((activity) => {
    const date = activity.startTime.toISOString().split("T")[0];
    const duration =
      (new Date(activity.endTime) - new Date(activity.startTime)) / 3600000;
    report[date] = (report[date] || 0) + duration;
  });

  return report;
};
