const mongoose = require("mongoose");

//declaracion de la funcion asincrona para la conexion a la base de datos
const connectDb = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://alefrndz:05Enero98@cluster0-8qev4.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  console.log("db connected with MongoDB Atlas");
};
module.exports = connectDb;
