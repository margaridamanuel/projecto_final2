import { Router } from "express";
import { AlojamentosController } from "../controllers/alojamentoController";

const router = Router();
const controller = new AlojamentosController();

router.get("/alojamentos", (req, res) => {
  controller.listar(req, res);
});

export default router;
