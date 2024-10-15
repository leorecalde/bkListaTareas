import Tarea from "../database/model/tarea.js";

export const funcionPrueba = (req, res) => {
  console.log("prueba");
  res.send("me solicitan un get");
};

export const creaTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).send("tarea creada con exito");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "ocurrio un error en la creacion de tu tarea" });
  }
};

export const listarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.find();
    res.status(200).json(tarea);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "ocurrio un error en la creacion de tu tarea" });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "la tarea solicitado no existe" });
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "la tarea fue editado con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude editar la tarea" });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "la tarea solicitado no existe" });
    }
    await Tarea.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ mensaje: "la tarea fue borrada con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude borrar la tarea" });
  }
};

export const verTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "la tarea solicitado no existe" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude mostrar la tarea" });
  }
};
