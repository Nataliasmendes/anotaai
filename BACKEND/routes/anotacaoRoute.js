import { Router } from "express";
import anotacaoController from "../controllers/anotacaoController.js";

//chama a função Router do express para config as fotas
const routes = Router();

routes
    .get("/anotacao", anotacaoController.listar)
    .get("/anotacao/:id", anotacaoController.obterPorId)
    .post("/anotacao/", anotacaoController.criar);

    /*routes.get();
    routes.get();*/

    export default routes;