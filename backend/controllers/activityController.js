import Activity from "../models/Activity.js";

export const createActivity = async (req, res) => {
  try {
    const { name, startTime, endTime } = req.body;

    if (!name || !startTime || !endTime) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
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

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      where: { userId: req.user.userId },
      order: [["startTime", "ASC"]],
    });

    res.status(200).json(activities);
  } catch (error) {
    console.error("❌ Erro ao buscar atividades:", error);
    res.status(500).json({ message: "Erro ao buscar atividades", error });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findOne({
      where: { id, userId: req.user.userId },
    });

    if (!activity) {
      return res.status(404).json({ message: "Atividade não encontrada" });
    }

    await activity.destroy();
    res.status(200).json({ message: "Atividade deletada com sucesso" });
  } catch (error) {
    console.error("❌ Erro ao deletar atividade:", error);
    res.status(500).json({ message: "Erro ao deletar atividade", error });
  }
};

export const getActivityReport = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      where: { userId: req.user.userId },
    });

    const report = {};

    activities.forEach((activity) => {
      const date = new Date(activity.startTime).toISOString().split("T")[0];
      const duration =
        (new Date(activity.endTime) - new Date(activity.startTime)) /
        (1000 * 60 * 60);
      report[date] = (report[date] || 0) + duration;
    });

    res.status(200).json(report);
  } catch (error) {
    console.error("❌ Erro ao gerar relatório:", error);
    res.status(500).json({ message: "Erro ao gerar relatório", error });
  }
};
