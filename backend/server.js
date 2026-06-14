import express from "express";
import cors from "cors";
import db from "./config/database.js";
import destinosRoutes from "./routes/destinosRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/destinos", destinosRoutes);

db.getConnection((err, connection) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("MySQL conectado com sucesso!");
    connection.release();
  }
});

app.get("/", (req, res) => {
  res.json({
    mensagem: "Backend TravelAngola funcionando",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
