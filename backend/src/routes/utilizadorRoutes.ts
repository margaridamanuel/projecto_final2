import { Router } from "express";
import { Request, Response } from "express";
import { UtilizadorController } from "../controllers/UtilizadorController";

const utilizadorRouter = Router();
const utilizadorcontroller = new UtilizadorController();

utilizadorRouter.get("/", (req: Request, res: Response) =>
  utilizadorcontroller.criarUtilizador(req, res),
);

export default utilizadorRouter;
