const cliCtrl = {};

const Cliente = require("../models/clientes");

//crear una nueva Linea
cliCtrl.create = async (req, res) => {
  const {
    nombre,
    domicilio,
    telefono,
    celular,
    correo,
    observaciones
  } = req.body;
  const nuevoCliente = new Cliente({
    nombre,
    domicilio,
    telefono,
    celular,
    correo,
    observaciones
  });
  await nuevoCliente.save();
  res.status(201).json({
    message: "nuevo cliente creado",
    cliente_Creado: nuevoCliente
  });
};

//consultar todas las lineas
cliCtrl.getMany = async (req, res) => {
  const cli = await Cliente.find();
  res.json(cli);
};

//consultar una sola linea por Id
cliCtrl.getOne = async (req, res) => {
  const cli = await Cliente.findById(req.params.id);
  res.json(cli);
};

//borrar una linea
cliCtrl.deleteOne = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json("cliente borrado");
};

//actualizar una linea
cliCtrl.update = async (req, res) => {
  const {
    nombre,
    domicilio,
    telefono,
    celular,
    correo,
    observaciones
  } = req.body;
  await Cliente.findByIdAndUpdate(req.params.id, {
    nombre,
    domicilio,
    telefono,
    celular,
    correo,
    observaciones
  });
  res.json("Cliente Updated");
};

module.exports = cliCtrl;
