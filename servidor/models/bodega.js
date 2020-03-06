//constante para utilizar los metodos "Schema" y "model" de la paqueteria de mongoose
const { Schema, model } = require("mongoose");

//constante para utlizar un numero auntoincremental de la paqueteria que esta aqui abajo
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

//Definimos nuestro esquema(tabla de datos) con la constante Remision
const Bodega = Schema({
  id: Schema.Types.ObjectId,
  producto: { type: Schema.ObjectId, ref: "producto" },
  cantidad: Number,
  costo: Number,
  observacion: String
});

//inicializamos el plugin para el autoincremental
Bodega.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "bodega",
  field: "clave",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("bodega", Bodega);
