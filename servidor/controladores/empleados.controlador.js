const cliCtrl = {};

const Empleado = require("../models/clientes");

//crear una nueva Linea
cliCtrl.create = async (req, res) => {
  const { nombre, correo, telefono, domicilio, puesto } = req.body;
  const nuevoEmpleado = new Empleado({
    nombre,
    correo,
    telefono,
    domicilio,
    puesto
  });
  await nuevoEmpleado.save();
  res.status(201).json({
    message: "nuevo empleado creado",
    empleado_Creado: nuevoEmpleado
  });
};

//consultar todas las lineas
cliCtrl.getMany = async (req, res) => {
  const emp = await Empleado.find();
  res.json(emp);
};

//consultar una sola linea por Id
cliCtrl.getOne = async (req, res) => {
  const emp = await Empleado.findById(req.params.id);
  res.json(emp);
};

//borrar una linea
cliCtrl.deleteOne = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json("cliente borrado");
};

//actualizar una linea
cliCtrl.update = async (req, res) => {
  const { nombre, correo, telefono, domicilio, puesto } = req.body;
  await Empleado.findByIdAndUpdate(req.params.id, {
    nombre,
    correo,
    telefono,
    domicilio,
    puesto
  });
  res.json("Empleado Updated");
};

module.exports = cliCtrl;
