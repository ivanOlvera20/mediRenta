const remCtrl = {};

const Remision = require("../models/remision");

//crear una nueva Linea
remCtrl.create = async (req, res) => {
  const {
    nombreCliente,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    tipoPago,
    fechaPedido,
    estadoRemision,
    cantidad,
    unidad,
    codigo,
    producto,
    precioUnitario,
    total
  } = req.body;
  const nuevaRem = new Remision({
    nombreCliente,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    tipoPago,
    fechaPedido,
    estadoRemision,
    cantidad,
    unidad,
    codigo,
    producto,
    precioUnitario,
    total
  });
  await nuevaRem.save();
  res.status(201).json({
    message: "nuevo empleado creado",
    remisionCreado: nuevaRem
  });
};

//consultar todas las lineas
remCtrl.getMany = async (req, res) => {
  const rem = await Remision.find()
    .populate("producto", "descripcion")
    .populate("nombreCliente", "nombre")
    .populate("atendio", "nombre")
    .populate("entrego", "nombre");
  res.json(rem);
};

//consultar una sola linea por Id
remCtrl.getOne = async (req, res) => {
  const rem = await Remision.findById(req.params.id);
  res.json(rem);
};

//borrar una linea
remCtrl.deleteOne = async (req, res) => {
  await Remision.findByIdAndDelete(req.params.id);
  res.json("remision borrado");
};

//actualizar una linea
remCtrl.update = async (req, res) => {
  const {
    nombreCliente,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    tipoPago,
    fechaPedido,
    estadoRemision,
    cantidad,
    unidad,
    codigo,
    producto,
    precioUnitario,
    total
  } = req.body;
  await Remision.findByIdAndUpdate(req.params.id, {
    nombreCliente,
    tipoServicio,
    fechaInicial,
    diasRenta,
    fechaFinal,
    atendio,
    entrego,
    tipoPago,
    fechaPedido,
    estadoRemision,
    cantidad,
    unidad,
    codigo,
    producto,
    precioUnitario,
    total
  });
  res.json("A ale le huele la cola Updated");
};

module.exports = remCtrl;
