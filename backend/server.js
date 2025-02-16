import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import { sequelize } from "./config/database.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Backend WorkTime está rodando! Acesse /api para usar a API.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

sequelize
  .sync({ force: false })
  .then(() => console.log("✅ Tabelas sincronizadas com o banco de dados!"))
  .catch((err) => console.error("❌ Erro ao sincronizar tabelas:", err));
