//constante para utilizar los metodos "Schema" y "model" de la paqueteria de mongoose 
const { Schema, model } = require("mongoose");

//constante para utlizar un numero auntoincremental de la paqueteria que esta aqui abajo
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

//Definimos nuestro esquema(tabla de datos) con la constante Remision
const Remision = Schema({
    id: Schema.Types.ObjectId,
    nombreCliente: { type: Schema.ObjectId, ref: 'cliente' },
    tipoServicio: String,
    fechaInicial: Date,
    diasRenta: Number,
    fechaFinal: Date,
    atendio: {type: Schema.ObjectId, ref: 'empleado'},
    entrego: {type: Schema.ObjectId, ref: 'empleado'},
    tipoPago: String,
    fechaPedido: Date,
    estadoRemision: String,
    cantidad: Number,
    unidad: String,
    codigo: String,
    producto: { type: Schema.ObjectId, ref='producto' },
    precioUnitario: Number,
    total: Number
})

//inicializamos el plugin para el autoincremental
Remision.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "remision",
  field: "numeroRemision",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});



module.exports = model("remison", Remision);