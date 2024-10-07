import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from 'path';
import {fileURLToPath} from 'url'
import './src/database/dbConection.js'
import ruta from "./src/routes/tarea.routes.js";

//configuracion del puerto
const app = express();

app.set("puerto", process.env.Port || 4000);

app.listen(app.get("puerto"), () => {
  console.info("estoy escuchando el puerto" + app.get("puerto"));
});

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(path.join(__dirname, "/public"));

app.use(express.static(path.join(__dirname, "/public")));

//configuracion de rutas
app.use('/api', ruta)
