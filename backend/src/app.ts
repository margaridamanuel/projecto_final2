import express from "express";
import cors from "cors";
import routesRoot from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", routesRoot);

app.get("/", (__, res) => {
  res.send("Bem-vindo à API de Destinos Turísticos de Angola!");
});
export default app;
