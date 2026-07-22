import { Router } from "express";
import { ReservaController } from "../controllers/reservaController";

const router = Router();
const controller = new ReservaController();

// Dashboard do proprietário
router.get(
  "/proprietario/:id/dashboard",
  controller.dashboard.bind(controller),
);

// Reservas do proprietário
router.get(
  "/reservas/proprietario/:id",
  controller.listarDoProprietario.bind(controller),
);

// Listar todas
router.get("/reservas", controller.listar.bind(controller));

// Criar
router.post("/reservas", controller.criar.bind(controller));

// Atualizar estado
router.patch(
  "/reservas/:id/status",
  controller.atualizarStatus.bind(controller),
);

export default router;
