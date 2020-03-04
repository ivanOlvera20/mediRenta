//constante para utilizar los metodos "Schema" y "model" de la paqueteria de mongoose
const { Schema, model } = require("mongoose");

//constante para utlizar un numero auntoincremental de la paqueteria que esta aqui abajo
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

//Definimos nuestro esquema(tabla de datos) con la constante Remision
const Producto = Schema({
  id: Schema.Types.ObjectId,
  descripcion: String,
  precio: Number
});

//inicializamos el plugin para el autoincremental
Producto.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "producto",
  field: "clave",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("producto", Producto);
