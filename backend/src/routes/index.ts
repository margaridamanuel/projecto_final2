import { Router } from "express";
import destinoRouter from "./destinosRoutes";
import alojamentosRouter from "./alojamentosRouter";
import authRouter from "./auth.routes";

const routesRoot = Router();

routesRoot.use(destinoRouter);
routesRoot.use(alojamentosRouter);
routesRoot.use(authRouter);

export default routesRoot;
