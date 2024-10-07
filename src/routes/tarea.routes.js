import { Router } from "express";
import {
  funcionPrueba,
  listarTarea,
} from "../controllers/tareas.controllers.js";
import { creaTarea } from "../controllers/tareas.controllers.js";
const ruta = Router();
ruta.route("/prueba").get(funcionPrueba);
ruta.route("/tareas").post(creaTarea).get(listarTarea);

export default ruta;
