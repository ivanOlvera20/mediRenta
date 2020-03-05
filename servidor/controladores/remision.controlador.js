const cliCtrl = {};

const Remision = require("../models/clientes");

//crear una nueva Linea
cliCtrl.create = async (req, res) => {
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
cliCtrl.getMany = async (req, res) => {
  const rem = await Remision.find();
  res.json(rem);
};

//consultar una sola linea por Id
cliCtrl.getOne = async (req, res) => {
  const rem = await Remision.findById(req.params.id);
  res.json(rem);
};

//borrar una linea
cliCtrl.deleteOne = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json("remision borrado");
};

//actualizar una linea
cliCtrl.update = async (req, res) => {
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

module.exports = cliCtrl;
