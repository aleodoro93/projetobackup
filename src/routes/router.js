import express from "express";
const router = express.Router();
import ClientesController from "../controller/clientesController.js";


router.post("/clientes", ClientesController.create);


export default router;
