//constante para utilizar los metodos "Schema" y "model" de la paqueteria de mongoose
const { Schema, model } = require("mongoose");

//constante para utlizar un numero auntoincremental de la paqueteria que esta aqui abajo
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

//Definimos nuestro esquema(tabla de datos) con la constante Remision
const Contrato = Schema({
  id: Schema.Types.ObjectId,
  nombreCliente: { type: Schema.ObjectId, ref: "cliente" },
  remision: { type: Schema.ObjectId, ref: "remision" },
  tipoServicio: String,
  fechaInicial: Date,
  diasRenta: Number,
  fechaFinal: Date,
  atendio: { type: Schema.ObjectId, ref: "empleado" },
  entrego: { type: Schema.ObjectId, ref: "empleado" },
  fechaPedido: Date,
  cantidad: Number,
  precioRenta: Number,
  referencia: Number,
  producto: { type: Schema.ObjectId, ref: "producto" },
  modalidad: String,
  tipoPedido: String,
  cantidad: Number,
  total: Number
});

//inicializamos el plugin para el autoincremental
Contrato.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "contrato",
  field: "clave",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("contrato", Contrato);
