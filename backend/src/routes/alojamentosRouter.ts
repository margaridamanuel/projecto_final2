import { Router } from "express";
import { AlojamentosController } from "../controllers/alojamentoController";
import upload from "../milddleware/upload";

const router = Router();

const controller = new AlojamentosController();

// LISTAR DO PROPRIETÁRIO
router.get(
  "/alojamentos/proprietario/:id",
  controller.listarDoProprietario.bind(controller),
);

// BUSCAR POR ID
router.get("/alojamentos/:id", controller.buscarPorId.bind(controller));

// CRIAR
router.post(
  "/alojamentos",
  upload.array("fotos", 10),
  controller.criar.bind(controller),
);

// ALTERAR STATUS
router.patch(
  "/alojamentos/:id/status",
  controller.atualizarStatus.bind(controller),
);

// LISTAR TODOS
router.get("/alojamentos", controller.listar.bind(controller));
export default router;
