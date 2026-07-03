import { Router } from "express";
import { Request, Response } from "express";
import { DestinoController } from "../controllers/DestinosController";

const destinoRouter = Router();
const destinoController = new DestinoController();

destinoRouter.get("/destinos", (req: Request, res: Response) =>
  destinoController.listarDestinos(req, res),
);

export default destinoRouter;
