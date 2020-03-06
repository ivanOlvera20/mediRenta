//constante para utilizar los metodos "Schema" y "model" de la paqueteria de mongoose
const { Schema, model } = require("mongoose");

//constante para utlizar un numero auntoincremental de la paqueteria que esta aqui abajo
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

//Definimos nuestro esquema(tabla de datos) con la constante Remision
const Proveedor = Schema({
  id: Schema.Types.ObjectId,
  nombre: String,
  domicilio: {
    calle: String,
    colonia: String,
    numInt: Number,
    estado: String,
    municipio: String,
    cp: Number
  },
  telefono: Number,
  celular: Number
});

//inicializamos el plugin para el autoincremental
Proveedor.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "proveedor",
  field: "clave",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("proveedor", Proveedor);
