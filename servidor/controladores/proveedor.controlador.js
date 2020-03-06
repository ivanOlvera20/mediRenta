const provCtrl = {};

const Proveedor = require("../models/provedores");

//crear una nueva Linea
provCtrl.create = async (req, res) => {
  const { nombre, telefono, celular, domicilio } = req.body;
  const nuevoPro = new Proveedor({
    nombre,
    telefono,
    celular,
    domicilio
  });
  await nuevoPro.save();
  res.status(201).json({
    message: "nuevo proveedor creado",
    proveedor_Creado: nuevoPro
  });
};

//consultar todas las lineas
provCtrl.getMany = async (req, res) => {
  const pro = await Proveedor.find();
  res.json(pro);
};

//consultar una sola linea por Id
provCtrl.getOne = async (req, res) => {
  const pro = await Proveedor.findById(req.params.id);
  res.json(pro);
};

//borrar una linea
provCtrl.deleteOne = async (req, res) => {
  await Proveedor.findByIdAndDelete(req.params.id);
  res.json("proveedor borrado");
};

//actualizar una linea
provCtrl.update = async (req, res) => {
  const { nombre, telefono, celular, domicilio } = req.body;
  await Proveedor.findByIdAndUpdate(req.params.id, {
    nombre,
    telefono,
    celular,
    domicilio
  });
  res.json("Proveedor Updated");
};

module.exports = provCtrl;
