"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_1 = __importDefault(require("./config/database"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
database_1.default
  .authenticate()
  .then(function () {
    return console.log("✅ Conectado ao banco de dados!");
  })
  .catch(function (err) {
    return console.error("❌ Erro ao conectar ao banco de dados:", err);
  });
app.use("/api/users", userRoutes_1.default);
app.use("/api/activities", activityRoutes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Servidor rodando na porta ".concat(PORT));
});
