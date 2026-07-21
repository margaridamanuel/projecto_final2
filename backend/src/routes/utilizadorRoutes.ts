import { Router } from "express";
import { UtilizadorController } from "../controllers/UtilizadorController";

const utilizadorRouter = Router();

const controller = new UtilizadorController();

utilizadorRouter.post("/utilizadores", (req, res) =>
  controller.criarUtilizador(req, res),
);

utilizadorRouter.get(
  "/utilizadores",
  controller.obterUtilizador.bind(controller),
);

utilizadorRouter.get(
  "/utilizadores/:id",
  controller.obterUtilizadorPorId.bind(controller),
);

export default utilizadorRouter;
