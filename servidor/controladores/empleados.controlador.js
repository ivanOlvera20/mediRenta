const empCtrl = {};

const Empleado = require("../models/empleados");

//crear una nueva Linea
empCtrl.create = async (req, res) => {
  const { nombre, correo, telefono, celular, domicilio, puesto } = req.body;
  const nuevoEmpleado = new Empleado({
    nombre,
    correo,
    telefono,
    celular,
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
empCtrl.getMany = async (req, res) => {
  const emp = await Empleado.find();
  res.json(emp);
};

//consultar una sola linea por Id
empCtrl.getOne = async (req, res) => {
  const emp = await Empleado.findById(req.params.id);
  res.json(emp);
};

//borrar una linea
empCtrl.deleteOne = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json("cliente borrado");
};

//actualizar una linea
empCtrl.update = async (req, res) => {
  const { nombre, correo, telefono, celular, domicilio, puesto } = req.body;
  await Empleado.findByIdAndUpdate(req.params.id, {
    nombre,
    correo,
    celular,
    telefono,
    domicilio,
    puesto
  });
  res.json("Empleado Updated");
};

module.exports = empCtrl;
