import express from "express";
import { UtilizadorController } from "../controllers/UtilizadorController";

const router = express.Router();
const controller = new UtilizadorController();

router.post("/utilizadores", controller.criarUtilizador.bind(controller));

export default router;
