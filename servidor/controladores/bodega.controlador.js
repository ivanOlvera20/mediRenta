const bodCtrl = {};

const Bodega = require("../models/bodega");

//crear una nueva Linea
bodCtrl.create = async (req, res) => {
  const { producto, cantidad, costo, observacion } = req.body;
  const nuevoBod = new Bodega({
    producto,
    cantidad,
    costo,
    observacion
  });
  await nuevoBod.save();
  res.status(201).json({
    message: "nuevo bodega creado",
    Bodega_Creado: nuevoBod
  });
};

//consultar todas las lineas
bodCtrl.getMany = async (req, res) => {
  const bod = await Bodega.find().populate("producto", "descripcion");
  res.json(bod);
};

//consultar una sola linea por Id
bodCtrl.getOne = async (req, res) => {
  const bod = await Bodega.findById(req.params.id);
  res.json(bod);
};

//borrar una linea
bodCtrl.deleteOne = async (req, res) => {
  await Bodega.findByIdAndDelete(req.params.id);
  res.json("bodega borrado");
};

//actualizar una linea
bodCtrl.update = async (req, res) => {
  const { producto, cantidad, costo, observacion } = req.body;
  await Bodega.findByIdAndUpdate(req.params.id, {
    producto,
    cantidad,
    costo,
    observacion
  });
  res.json("Bodega Updated");
};

module.exports = bodCtrl;
