import  express from "express";
const router = express.Router()
import ClientesController from "../controller/clientesController.js";

router
.route("/clientes")
.post((req, res)=> ClientesController.create(req, res))

router.route("/clientes").get((req, res)=> ClientesController.getAll(req, res));

export default router;

