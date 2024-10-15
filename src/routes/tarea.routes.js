import { Router } from "express";
import {
  borrarTarea,
  editarTarea,
  funcionPrueba,
  listarTarea,
  verTarea,
} from "../controllers/tareas.controllers.js";
import { creaTarea } from "../controllers/tareas.controllers.js";
const ruta = Router();
ruta.route("/prueba").get(funcionPrueba);
ruta.route("/tareas").post(creaTarea).get(listarTarea);
ruta.route("/tareas/:id").put(editarTarea).delete(borrarTarea).get(verTarea);

export default ruta;
