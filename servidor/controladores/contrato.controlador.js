const conCtrl = {};

const Contrato = require("../models/contrato");

//crear una nueva Linea
conCtrl.create = async (req, res) => {
  const {
    nombreCliente,
    remision,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    fechaPedido,
    cantidad,
    producto,
    precioRenta,
    referencia,
    modalidad,
    total
  } = req.body;
  const nuevaCon = new Contrato({
    nombreCliente,
    remision,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    fechaPedido,
    cantidad,
    producto,
    precioRenta,
    referencia,
    modalidad,
    total
  });
  await nuevaCon.save();
  res.status(201).json({
    message: "nuevo empleado creado",
    remisionCreado: nuevaCon
  });
};

//consultar todas las lineas
conCtrl.getMany = async (req, res) => {
  const rem = await Contrato.find()
    .populate("producto", "descripcion")
    .populate("nombreCliente", "nombre")
    .populate("atendio", "nombre")
    .populate("entrego", "nombre")
    .populate("remision", "numeroRemision");
  res.json(rem);
};

//consultar una sola linea por Id
conCtrl.getOne = async (req, res) => {
  const rem = await Contrato.findById(req.params.id);
  res.json(rem);
};

//borrar una linea
conCtrl.deleteOne = async (req, res) => {
  await Contrato.findByIdAndDelete(req.params.id);
  res.json("remision borrado");
};

//actualizar una linea
conCtrl.update = async (req, res) => {
  const {
    nombreCliente,
    remision,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    fechaPedido,
    cantidad,
    producto,
    precioRenta,
    referencia,
    modalidad,
    total
  } = req.body;
  await Contrato.findByIdAndUpdate(req.params.id, {
    nombreCliente,
    remision,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    fechaPedido,
    cantidad,
    producto,
    precioRenta,
    referencia,
    modalidad,
    total
  });
  res.json("A ale le huele la cola Updated");
};

module.exports = conCtrl;
