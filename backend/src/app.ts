import express from "express";
import cors from "cors";
import path from "path";
import routesRoot from "./routes";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/v1", routesRoot);

app.get("/", (__, res) => {
  res.send("Bem-vindo à API de Destinos Turísticos de Angola!");
});
export default app;
