import { Router } from "express";
import { AlojamentosController } from "../controllers/alojamentoController";
import upload from "../milddleware/upload";

const router = Router();

const controller = new AlojamentosController();

// Listar alojamentos
router.get("/alojamentos", (req, res) => {
  controller.listar(req, res);
});

// Criar alojamento
router.post("/alojamentos", upload.array("fotos", 10), (req, res) => {
  controller.criar(req, res);
});

router.patch("/alojamentos/:id/status", (req, res) => {
  controller.atualizarStatus(req, res);
});

export default router;
