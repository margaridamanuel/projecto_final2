import { Router } from "express";
import destinoRouter from "./destinosRoutes";
import alojamentosRouter from "./alojamentosRouter";
import authRouter from "./auth.routes";
import reservaRouter from "./reservaRoutes";
import utilizadorRouter from "./utilizadorRoutes";
const routesRoot = Router();

routesRoot.use(destinoRouter);
routesRoot.use(alojamentosRouter);
routesRoot.use(reservaRouter);
routesRoot.use(authRouter);
routesRoot.use(utilizadorRouter);
export default routesRoot;
