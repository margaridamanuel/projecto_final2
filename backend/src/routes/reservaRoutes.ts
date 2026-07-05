import { Router } from "express";
import { ReservaController } from "../controllers/reservaController";

const router = Router();
const controller = new ReservaController();

router.post("/reservas", (req, res) => controller.criar(req, res));

export default router;
