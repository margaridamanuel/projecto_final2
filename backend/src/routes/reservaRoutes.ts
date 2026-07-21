import { Router } from "express";
import { ReservaController } from "../controllers/reservaController";

const router = Router();

const controller = new ReservaController();

router.get("/reservas", controller.listar.bind(controller));

router.get(
  "/reservas/proprietario/:id",
  controller.listarDoProprietario.bind(controller),
);

router.post("/reservas", controller.criar.bind(controller));

router.patch(
  "/reservas/:id/status",
  controller.atualizarStatus.bind(controller),
);

export default router;
