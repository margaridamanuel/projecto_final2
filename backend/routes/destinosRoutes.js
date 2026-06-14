import express from "express";
import { listarDestinos } from "../controllers/destinosController.js";

const router = express.Router();

router.get("/", listarDestinos);

export default router;
