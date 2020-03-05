const cliCtrl = {};

const Producto = require("../models/clientes");

//crear una nueva Linea
cliCtrl.create = async (req, res) => {
  const { descripcion, precio } = req.body;
  const nuevoProducto = new Producto({
    descripcion,
    precio
  });
  await nuevoProducto.save();
  res.status(201).json({
    message: "nuevo empleado creado",
    producto_Creado: nuevoProducto
  });
};

//consultar todas las lineas
cliCtrl.getMany = async (req, res) => {
  const pro = await Producto.find();
  res.json(pro);
};

//consultar una sola linea por Id
cliCtrl.getOne = async (req, res) => {
  const pro = await Producto.findById(req.params.id);
  res.json(pro);
};

//borrar una linea
cliCtrl.deleteOne = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json("producto borrado");
};

//actualizar una linea
cliCtrl.update = async (req, res) => {
  const { descripcion, precio } = req.body;
  await Producto.findByIdAndUpdate(req.params.id, {
    descripcion,
    precio
  });
  res.json("Producto Updated");
};

module.exports = cliCtrl;
