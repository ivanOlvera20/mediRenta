const proCtrl = {};

const Producto = require("../models/producto");

//crear una nueva Linea
proCtrl.create = async (req, res) => {
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
proCtrl.getMany = async (req, res) => {
  const pro = await Producto.find();
  res.json(pro);
};

//consultar una sola linea por Id
proCtrl.getOne = async (req, res) => {
  const pro = await Producto.findById(req.params.id);
  res.json(pro);
};

//borrar una linea
proCtrl.deleteOne = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json("producto borrado");
};

//actualizar una linea
proCtrl.update = async (req, res) => {
  const { descripcion, precio } = req.body;
  await Producto.findByIdAndUpdate(req.params.id, {
    descripcion,
    precio
  });
  res.json("Producto Updated");
};

module.exports = proCtrl;
