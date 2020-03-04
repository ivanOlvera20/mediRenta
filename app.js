const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
}); */

app.use(express.urlencoded({ extended: false }));

app.use("/api/clientes", require("./rutas/clientes"));
app.use("/api/empleados", require("./rutas/empleados"));
app.use("/api/productos", require("./rutas/producto"));
app.use("/api/remision", require("./rutas/remision"));

module.exports = app;
