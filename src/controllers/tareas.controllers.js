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
